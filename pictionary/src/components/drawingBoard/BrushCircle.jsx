import React from "react";
import './BrushCircle.css'
import { allBrushSizes } from "../../constants/DrawingBoardConstants";

const BrushCircle = ({ size, currentBrushSize, changeBrushSize }) => {
    const selected = (size === currentBrushSize) ? "selected" : ""
    const brushSize = (Object.keys(allBrushSizes).includes(size)) ? size : "medium"

    return (
        <div 
            className={`BrushCircle ${brushSize} ${selected}`} 
            onClick={() => changeBrushSize(size)}
        />
    );
}

export default BrushCircle