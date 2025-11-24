import { useState, useEffect } from "react";

export const useResponsiveIconSize = (defaultWidth, defaultHeight) => {
  const [size, setSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      let scale = 1;

      if (width <= 1023) {
        scale = 0.6;
      }

      setSize({
        width: defaultWidth * scale,
        height: defaultHeight * scale,
      });
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [defaultWidth, defaultHeight]);

  return size;
};
