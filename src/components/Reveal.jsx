import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

const variants = {
  "fade-up": "translate-y-8",
  "fade-down": "-translate-y-8",
  "fade-left": "translate-x-8",
  "fade-right": "-translate-x-8",
  "fade-in": "",
  "zoom-in": "scale-95",
};

const Reveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  as: Tag = "div",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={cn(
        "transition-all ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none",
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${variants[variant] || variants["fade-up"]}`,
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
