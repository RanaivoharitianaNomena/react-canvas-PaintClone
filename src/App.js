import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react'
import CanvasDraw from 'react-canvas-draw'
function App() {

  const firstCanvas = useRef(null)

  const effacer = () =>{
    firstCanvas.current.clear()
  }

  const annuler = () =>{
    firstCanvas.current.undo()
  }

  return (
    <div>
      <button onClick={effacer}>
        Effacer
      </button>
      <button onClick={annuler}>
        Annuler
      </button>
      <CanvasDraw 
       brushRadius={0.3} 
        hideGrid={true}
        style={{border:'1px solid #000'}}
        ref={firstCanvas}
      />
    </div>
  );
}

export default App;
