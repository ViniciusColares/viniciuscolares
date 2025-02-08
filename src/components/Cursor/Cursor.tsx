"use client";
import { useEffect, useRef } from "react";

const Cursor = () => {
  const blackHoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (blackHoleRef.current) {
        blackHoleRef.current.style.left = `${event.clientX}px`;
        blackHoleRef.current.style.top = `${event.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={blackHoleRef} className="black-hole" />;
};

export default Cursor;
