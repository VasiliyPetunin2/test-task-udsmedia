import React from "react";
import spriteUrl from "@/assets/sprite.svg";

const Icon = ({
  name,
  width,
  height,
  fillColor = "none",
  strokeColor = "none",
  ...props
}) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      fill={fillColor}
      stroke={strokeColor}
      {...props}
    >
      <use xlinkHref={`${spriteUrl}#${name}`} />
    </svg>
  );
};

export default Icon;
