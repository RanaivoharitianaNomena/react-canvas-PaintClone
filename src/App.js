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
    <div class="container-canvas">
      <button id="clear" onClick={effacer}>
        Effacer
      </button>
      <button id="undo" onClick={annuler}>
        Annuler
      </button>

      
      <CanvasDraw
        id = "canvas" 
        brushRadius={1} 
        hideGrid={true} 
        ref={firstCanvas}
        canvasHeight={600}
        canvasWidth={800}
      />

      
    </div>
  );
}

export default App;
