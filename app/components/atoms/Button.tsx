import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...rest }: Props) => {
  return (
    <button
      className={clsx(
        "text-white-100 bg-gradient-to-r from-primary",
        "h-10 px-32",
        "border border-white-400",
        "rounded-3xl",
        "cursor-pointer",
        "relative shadow",
        // Hover
        "transition",
        "hover:scale-105 hover:shadow-md",
        // Focus
        "outline-none",
        "ring-primary/70 ring-offset-2",
        "focus-visible:ring-2 focus:scale-[0.98]",
        // Disabled
        "disabled:bg-gradient-primary-disabled disabled:cursor-not-allowed ",
        className
      )}
      disabled={rest.disabled}
      {...rest}
    />
  );
};
