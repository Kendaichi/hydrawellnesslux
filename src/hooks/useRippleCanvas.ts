import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  pulseSpeed: number;
  pulsePhase: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  maxRadius: number;
  color: string;
}

export function useRippleCanvas(variant: "hero" | "cta" = "hero") {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouse = { x: -1000, y: -1000 };
    const particles: Particle[] = [];
    const ripples: Ripple[] = [];
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    const goldColor = "201, 168, 76";
    const waterColor = "123, 184, 204";
    const waterLightColor = "168, 212, 228";

    // More particles with mixed colors
    const particleCount = variant === "hero" ? 90 : 70;
    for (let i = 0; i < particleCount; i++) {
      const isBlue = Math.random() > 0.4; // 60% blue particles
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.8 + 0.7,
        alpha: Math.random() * 0.5 + 0.22,
        color: isBlue
          ? (Math.random() > 0.5 ? waterColor : waterLightColor)
          : goldColor,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let rippleTimer = 0;
    const spawnRipple = (x: number, y: number) => {
      const isBlue = Math.random() > 0.35;
      ripples.push({
        x, y,
        radius: 0,
        alpha: 0.35,
        maxRadius: 180 + Math.random() * 120,
        color: isBlue ? waterColor : goldColor,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Spawn burst of ripples on click
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          spawnRipple(
            e.clientX - rect.left + (Math.random() - 0.5) * 40,
            e.clientY - rect.top + (Math.random() - 0.5) * 40
          );
        }, i * 100);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    const draw = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);
      time++;

      // Ripples - spawn more frequently
      rippleTimer++;
      if (rippleTimer % 70 === 0) {
        spawnRipple(Math.random() * cw, Math.random() * ch);
      }

      // Mouse-following ripple
      if (rippleTimer % 40 === 0 && mouse.x > 0) {
        spawnRipple(mouse.x + (Math.random() - 0.5) * 80, mouse.y + (Math.random() - 0.5) * 80);
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 0.8;
        r.alpha -= 0.0015;
        if (r.alpha <= 0 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r.color}, ${r.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Second inner ring
        if (r.radius > 20) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r.color}, ${r.alpha * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Particles with pulsing
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.vx += dx * 0.0015;
          p.vy += dy * 0.0015;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0) p.x = cw;
        if (p.x > cw) p.x = 0;
        if (p.y < 0) p.y = ch;
        if (p.y > ch) p.y = 0;

        // Pulse alpha
        const pulseAlpha = p.alpha * (0.65 + 0.35 * Math.sin(time * p.pulseSpeed + p.pulsePhase));

        // Glow effect for larger particles
        if (p.size > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${pulseAlpha * 0.13})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${pulseAlpha})`;
        ctx.fill();
      }

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.06;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${waterColor}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, [variant]);

  return canvasRef;
}
