import './App.css';
import DrawingBoard from './components/drawingBoard/DrawingBoard';

function App() {
  return (
    <div className="App">
      <DrawingBoard width={600} height={400}/>
    </div>
  );
}

export default App;
