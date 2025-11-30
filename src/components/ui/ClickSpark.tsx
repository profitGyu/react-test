import { useRef, useEffect, useCallback } from "react";

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
}

const ClickSpark = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  extraScale = 1.0,
}: ClickSparkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<
    { x: number; y: number; angle: number; startTime: number }[]
  >([]);

  const draw = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const ease = 1 - Math.pow(1 - progress, 3);

        const distance = sparkRadius * ease * extraScale + 20;
        const lineLength = sparkSize * (1 - progress);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const x1 = centerX + Math.cos(spark.angle) * distance;
        const y1 = centerY + Math.sin(spark.angle) * distance;
        const x2 = centerX + Math.cos(spark.angle) * (distance + lineLength);
        const y2 = centerY + Math.sin(spark.angle) * (distance + lineLength);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      if (sparksRef.current.length > 0) {
        requestAnimationFrame(draw);
      }
    },
    [sparkColor, sparkSize, sparkRadius, sparkCount, duration, extraScale]
  );

  const handleClick = useCallback(
    (e: MouseEvent) => {
      // 캔버스가 사라졌으면(언마운트) 무시
      if (!canvasRef.current) return;

      const now = performance.now();
      for (let i = 0; i < sparkCount; i++) {
        const angle = (i / sparkCount) * Math.PI * 2;
        sparksRef.current.push({
          x: 0,
          y: 0,
          angle,
          startTime: now,
        });
      }

      requestAnimationFrame(draw);
    },
    [sparkCount, draw]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * 3;
      canvas.height = rect.height * 3;
      canvas.style.width = `${rect.width * 3}px`;
      canvas.style.height = `${rect.height * 3}px`;
      canvas.style.position = "absolute";
      canvas.style.top = "50%";
      canvas.style.left = "50%";
      canvas.style.transform = "translate(-50%, -50%)";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "9999";
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // 부모 클릭 이벤트 감지
    parent.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      parent.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return <canvas ref={canvasRef} />;
};

export default ClickSpark;

