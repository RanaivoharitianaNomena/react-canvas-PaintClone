import logo from './logo.svg';
import './App.css';
import React, {Component, useRef, useState} from 'react'
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
       brushRadius={1} 
        hideGrid={true}
        style={{border:'1px solid #000'}}
        ref={firstCanvas}
        canvasHeight={768}
        canvasWidth={1366}
      />

      
    </div>
  );
}

export default App;
