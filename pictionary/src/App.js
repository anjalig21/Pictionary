import './App.css';
import {useState} from "react"
import ColourSquare from './components/drawingBoard/ColourSquare';
import DrawingBoard from './components/drawingBoard/DrawingBoard';
import { COLOURS, ALL_BRUSH_SIZES } from './constants/DrawingBoardConstants';
import BrushCircle from './components/drawingBoard/BrushCircle';

function App() {
  const [brushColour, setBrushColour] = useState("#000000")
  const [brushSize, setBrushSize] = useState("small")
  const changeBrushColour = (newColour) => setBrushColour(newColour)

  return (
    <div className="App">
      <div className='DrawingBoardAndBrushSizes'>
        <div className='Spacing'/>
        <div className="DrawingBoard">
          <DrawingBoard width={600} height={400} brushColour={brushColour} brushSize={brushSize}/>
        </div>
        <div className='BrushCircles'>
          {Object.keys(ALL_BRUSH_SIZES).map((size) => {
            return <BrushCircle size={size} currentBrushSize={brushSize} changeBrushSize={setBrushSize}/>
          })}
        </div>
      </div>
      
      <div className='ColourSquares'>
        {
          COLOURS.map((col) => {
            return <ColourSquare colour={col} changeColour={changeBrushColour} brushColour={brushColour}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
