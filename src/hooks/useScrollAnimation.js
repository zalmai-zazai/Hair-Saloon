// Create a new file: src/hooks/useScrollAnimation.js
import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve after animation
          if (options.once) {
            observer.unobserve(entry.target);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1, // 10% visible
        rootMargin: options.rootMargin || "0px 0px -50px 0px", // start animation a bit early
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options.once, options.threshold, options.rootMargin]);

  return [elementRef, isVisible];
};

export default useScrollAnimation;
