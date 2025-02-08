import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  onMouseEnter?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className,
  ...rest
}) => {
  const baseStyles =
    "font-bold rounded-lg transition-all ease-out duration-50 focus:outline-none backdrop-blur-sm";

  const variantStyles = {
    primary: "bg-purple-500 text-white hover:bg-purple-500",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border border-purple-400 text-purple-500",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 0.97 }}
      whileTap={{ scale: 0.94 }}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
