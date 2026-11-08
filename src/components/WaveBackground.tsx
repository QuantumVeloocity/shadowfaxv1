import React, { useEffect, useRef } from 'react';

interface WaveBackgroundProps {
  glowIntensity?: number;
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({ glowIntensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width * 0.7;
    let mouseY = height * 0.3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const numLines = 28;

    const render = () => {
      time += 0.008;
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Dark radial spotlight around cursor
      const radialGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        20,
        mouseX,
        mouseY,
        Math.max(width, height) * 0.65
      );
      radialGrad.addColorStop(0, 'rgba(229, 9, 20, 0.07)');
      radialGrad.addColorStop(0.4, 'rgba(20, 8, 12, 0.02)');
      radialGrad.addColorStop(1, 'rgba(5, 5, 7, 0)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw flowing parametric waveform curves (like the PDF branding)
      ctx.lineWidth = 1;
      const step = 25;

      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const factor = i / numLines;
        
        // Red accent line highlight every 7th wave
        if (i % 7 === 0) {
          ctx.strokeStyle = `rgba(229, 9, 20, ${0.35 * glowIntensity})`;
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + factor * 0.07})`;
          ctx.lineWidth = 0.8;
        }

        const baseY = height * 0.42 + (i - numLines / 2) * 16;
        let isFirst = true;

        for (let x = -50; x <= width + 50; x += step) {
          const normX = x / width;
          const distToMouse = Math.hypot(x - mouseX, baseY - mouseY);
          const mouseInfluence = Math.max(0, 1 - distToMouse / 600) * 45;

          const wave1 = Math.sin(normX * 4 + time + i * 0.12) * 55;
          const wave2 = Math.cos(normX * 6 - time * 0.8 + i * 0.09) * 28;
          const wave3 = Math.sin(normX * 2.5 + time * 0.5) * 40;

          const y = baseY + wave1 + wave2 + wave3 + (mouseInfluence * (i % 2 === 0 ? 1 : -0.7));

          if (isFirst) {
            ctx.moveTo(x, y);
            isFirst = false;
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [glowIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
