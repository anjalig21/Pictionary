import React, { useEffect, useRef, useState } from 'react';
import './DrawingBoard.css';

const DrawingBoard = ({ width = 500, height = 500 }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    const getMousePos = (canvas, evt) => {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top,
        };
    };

    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const mousePos = getMousePos(canvas, e);
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const mousePos = getMousePos(canvas, e);
        const ctx = canvas.getContext('2d');
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
    };

    const endDrawing = () => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.closePath();
    };

    useEffect(() => {
        window.addEventListener("mousedown", () => {
            setIsDrawing(true)
        })
        window.addEventListener("mouseup", () => {
            setIsDrawing(false)
        })
    }, [])

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={endDrawing}
                onMouseOut={endDrawing}
                onMouseEnter={startDrawing}
            />
        </div>
    );
};

export default DrawingBoard;
