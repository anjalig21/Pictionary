import './App.css';
import {useState} from "react"
import ColourSquare from './components/drawingBoard/ColourSquare';
import DrawingBoard from './components/drawingBoard/DrawingBoard';

function App() {
  const [brushColour, setBrushColour] = useState("#000000")
  const changeBrushColour = (newColour) => setBrushColour(newColour)

  return (
    <div className="App">
      <DrawingBoard width={600} height={400} brushColour={brushColour}/>
      <div className='ColourSquares'>
          <ColourSquare colour={"#000000"} changeColour={changeBrushColour} brushColour={brushColour}/>
          <ColourSquare colour={"#4287f5"} changeColour={changeBrushColour} brushColour={brushColour}/>
          <ColourSquare colour={"#9042f5"} changeColour={changeBrushColour} brushColour={brushColour}/>
          <ColourSquare colour={"#f542b6"} changeColour={changeBrushColour} brushColour={brushColour}/>
          <ColourSquare colour={"#f5426c"} changeColour={changeBrushColour} brushColour={brushColour}/>
          <ColourSquare colour={"#93f542"} changeColour={changeBrushColour} brushColour={brushColour}/>
          <ColourSquare colour={"#f5e642"} changeColour={changeBrushColour} brushColour={brushColour}/>
          <ColourSquare colour={"#f58442"} changeColour={changeBrushColour} brushColour={brushColour}/>
            </div>
    </div>
  );
}

export default App;
