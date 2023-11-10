import React, { useState } from 'react'
import Pixel from "./Pixel"
import './DrawingBoard.css'

const DrawingBoard = ({row=100, col=100}) => {
    const [isMouseDown, setIsMouseDown] = useState(false)

    const grid = []

    for (let i = 0; i < row; i++) {
        const currArr = []
        for (let j = 0; j < col; j++) {
            currArr.push(`cell${i.toString() + j.toString()}`)
        }
        grid.push(currArr)
    }

    window.onmousedown = () => {
        setIsMouseDown(true)
    }

    window.onmouseup = () => {
        setIsMouseDown(false)
    }

  return (
    <div>
        {grid.map((row, i) => (
            <div className="RowPixels" key={"row" + i.toString()}>
                { row.map((cellId) => <Pixel key={cellId} isMouseDown={isMouseDown}/>) }
            </div>
        ))}
    </div>
  )
}

export default DrawingBoard