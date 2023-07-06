import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="max-w-sm py-4 min-w-[300px] bg-white-600 border-2 border-white-300 rounded-3xl drop-shadow-primary mt-5">
      {children}
    </div>
  );
};
