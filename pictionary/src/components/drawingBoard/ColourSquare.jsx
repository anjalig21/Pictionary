import React from "react";
import "./ColourSquare.css"

const ColourSquare = ({colour, changeColour, brushColour}) => {
    const selected = (brushColour === colour) ? "selected" : ""

    return (
        <div 
        className={`ColourSquare ${selected}`} 
        onClick={() => {
            changeColour(colour)
        }} 
        style={{backgroundColor: colour}}/>
    )
}

export default ColourSquare