import React, { useEffect, useRef, useState } from 'react';

type BlurTextMode = 'words' | 'letters';
type BlurTextDirection = 'top' | 'bottom';

interface BlurTextProps {
  text: string;
  animateBy?: BlurTextMode;
  direction?: BlurTextDirection;
  delay?: number;
  stepDuration?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  onAnimationComplete?: () => void;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  animateBy = 'words',
  direction = 'top',
  delay = 200,
  stepDuration = 0.35,
  threshold = 0.1,
  rootMargin = '0px',
  className,
  onAnimationComplete,
}) => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const segments =
    animateBy === 'letters'
      ? text.split('')
      : text.split(/(\s+)/).filter(segment => segment.length > 0);

  useEffect(() => {
    if (!inView || hasCompletedRef.current || !onAnimationComplete) return;
    const totalMs = delay + segments.length * stepDuration * 1000;
    const timer = setTimeout(() => {
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        onAnimationComplete();
      }
    }, totalMs);
    return () => clearTimeout(timer);
  }, [inView, delay, stepDuration, onAnimationComplete, segments.length]);

  const offsetClass = direction === 'top' ? '-translate-y-3' : 'translate-y-3';

  return (
    <span ref={containerRef} className={className}>
      {segments.map((segment, index) => {
        const isSpace = /^\s+$/.test(segment);
        if (isSpace) {
          return (
            <span key={`space-${index}`} className="inline-block">
              {segment}
            </span>
          );
        }

        const segmentDelay = delay + index * stepDuration * 1000;

        return (
          <span
            key={`${segment}-${index}`}
            className={`inline-block will-change-transform transition-all duration-500 ease-out ${
              inView ? 'opacity-100 translate-y-0 blur-0' : `opacity-0 ${offsetClass} blur-sm`
            }`}
            style={{ transitionDelay: `${segmentDelay}ms` }}
          >
            {segment}
          </span>
        );
      })}
    </span>
  );
}
