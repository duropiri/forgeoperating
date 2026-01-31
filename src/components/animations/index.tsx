"use client";

import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

// ============================================
// FADE IN ANIMATIONS
// ============================================

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  once?: boolean;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
  className = "",
  once = true,
}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// STAGGER CHILDREN ANIMATIONS
// ============================================

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = "",
  once = true,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// ============================================
// SCALE ANIMATIONS
// ============================================

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: ScaleInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// PARALLAX SCROLL EFFECT
// ============================================

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax = ({ children, speed = 0.5, className = "" }: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// ============================================
// TEXT REVEAL ANIMATION
// ============================================

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  once?: boolean;
}

export const TextReveal = ({
  text,
  delay = 0,
  className = "",
  once = true,
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const words = text.split(" ");

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.08,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// ============================================
// BLUR IN ANIMATION
// ============================================

interface BlurInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const BlurIn = ({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}: BlurInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(10px)" }
      }
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// MAGNETIC HOVER EFFECT
// ============================================

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic = ({ children, className = "", strength = 0.3 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 0.3s cubic-bezier(0.25, 0.4, 0.25, 1)" }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// FLOATING ANIMATION
// ============================================

interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export const Floating = ({
  children,
  className = "",
  duration = 3,
  distance = 10,
}: FloatingProps) => {
  return (
    <motion.div
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// GLOW PULSE ANIMATION
// ============================================

interface GlowPulseProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export const GlowPulse = ({
  children,
  className = "",
  color = "rgba(20, 184, 166, 0.4)",
}: GlowPulseProps) => {
  return (
    <motion.div
      animate={{
        boxShadow: [
          `0 0 20px ${color}`,
          `0 0 40px ${color}`,
          `0 0 20px ${color}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// SLIDE IN FROM EDGE
// ============================================

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: SlideInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// ROTATE IN ANIMATION
// ============================================

interface RotateInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  degrees?: number;
  className?: string;
  once?: boolean;
}

export const RotateIn = ({
  children,
  delay = 0,
  duration = 0.6,
  degrees = 10,
  className = "",
  once = true,
}: RotateInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: degrees }}
      animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: degrees }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// COUNTER ANIMATION
// ============================================

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {prefix}
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration }}
          >
            {end.toLocaleString()}
          </motion.span>
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
};

// ============================================
// HOVER CARD EFFECT
// ============================================

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export const HoverCard = ({ children, className = "" }: HoverCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// SHIMMER EFFECT
// ============================================

interface ShimmerProps {
  children: ReactNode;
  className?: string;
}

export const Shimmer = ({ children, className = "" }: ShimmerProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 1 }}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

// ============================================
// PAGE TRANSITION WRAPPER
// ============================================

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// MORPHING BACKGROUND
// ============================================

interface MorphingBgProps {
  className?: string;
  colors?: string[];
}

export const MorphingBg = ({
  className = "",
  colors = ["#14b8a6", "#0d9488", "#0f766e"],
}: MorphingBgProps) => {
  return (
    <motion.div
      className={`absolute inset-0 -z-10 ${className}`}
      animate={{
        background: [
          `radial-gradient(circle at 20% 50%, ${colors[0]}20 0%, transparent 50%)`,
          `radial-gradient(circle at 80% 50%, ${colors[1]}20 0%, transparent 50%)`,
          `radial-gradient(circle at 50% 80%, ${colors[2]}20 0%, transparent 50%)`,
          `radial-gradient(circle at 20% 50%, ${colors[0]}20 0%, transparent 50%)`,
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
