import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

import "./DualButton.css";
import clsx from "clsx";

interface DualButtonProps {
  firstButton: {
    label: string;
    icon: string;
    onClick: () => void;
  };
  secondButton: {
    label: string;
    icon: string;
    onClick: () => void;
  };
  className?: string;
}

const DualButton: React.FC<DualButtonProps> = ({
  firstButton,
  secondButton,
  className,
}) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={`flex flex-col items-center ${clsx(className)}`}>
      <motion.button
        onClick={firstButton.onClick}
        onMouseEnter={() => setSelected(0)}
        className={`button ${selected === 0 ? "text-lg" : "text-sm"}`}
      >
        <AcademicCapIcon
          width={18}
          height={18}
          className="mr-2 inline stroke-purple-500"
        />{" "}
        {firstButton.label}
        {selected === 0 && (
          <motion.div
            layoutId="border"
            variants={borderVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="border"
          />
        )}
      </motion.button>

      <small className="my-1 text-gray-400 text-xs">ou</small>

      <motion.button
        onClick={secondButton.onClick}
        onMouseEnter={() => setSelected(1)}
        className={`button ${selected === 1 ? "text-lg" : "text-sm"}`}
      >
        <ClipboardDocumentCheckIcon
          width={18}
          height={18}
          className="mr-2 inline stroke-purple-500"
        />
        {secondButton.label}
        {selected === 1 && (
          <motion.div
            layoutId="border"
            variants={borderVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="border"
          />
        )}
      </motion.button>
    </div>
  );
};

// Variants for border animation
const borderVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default DualButton;
