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
      <div class = "palette">

        <div class ="button-component">
          <button id="clear" onClick={effacer}>
            &#10005;
          </button>
          <button id="undo" onClick={annuler}>
            &#8635;
          </button>
        </div>

        <div class ="color-component">  
        </div>

        <div class ="information-component"> 
        <p>
            RANAIVOHARITIANA Fiarenantsoa Andry Nomena IGGLIA 5 n°06
          </p>
          <p >
            RAZAFIMANANTSOA José Harisson IGGLIA 5 n°12
          </p>
        </div>

      </div>

      
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
