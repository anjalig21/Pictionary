import React from "react";
import './BrushCircle.css'
import { ALL_BRUSH_SIZES } from "../../constants/DrawingBoardConstants";

const BrushCircle = ({ size, currentBrushSize, changeBrushSize }) => {
    const selected = (size === currentBrushSize) ? "selected" : ""
    const brushSize = (Object.keys(ALL_BRUSH_SIZES).includes(size)) ? size : "medium"

    return (
        <div 
            className={`BrushCircle ${brushSize} ${selected}`} 
            onClick={() => changeBrushSize(size)}
        />
    );
}

export default BrushCircle