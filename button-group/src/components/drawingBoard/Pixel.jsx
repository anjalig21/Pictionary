import React, { useState } from "react";
import "./Pixel.css";

const Pixel = ({ colour = "#000000", isMouseDown }) => {
  const [pixelColour, setPixelColour] = useState("#FFFFFF");

  const handleMouseEnter = () => {
      if (pixelColour !== colour && isMouseDown) {
        setPixelColour(colour);
      }
  };

  return (
    <div
      className="Pixel"
      style={{
        background: pixelColour,
      }}
      onMouseMove={handleMouseEnter}
    />
  );
};

export default Pixel;
