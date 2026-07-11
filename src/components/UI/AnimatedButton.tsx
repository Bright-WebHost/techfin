import Link from 'next/link';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export default function AnimatedButton({ href, children, variant = 'primary', className = '' }: AnimatedButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition duration-300';
  const styles = variant === 'primary'
    ? 'bg-primary text-white hover:bg-red-600'
    : 'border border-primary text-primary hover:bg-primary hover:text-white';

  const content = (
    <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className={`${base} ${styles} ${className}`}>
      {children}
    </motion.span>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
