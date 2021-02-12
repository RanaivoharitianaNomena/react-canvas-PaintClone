import logo from './logo.svg';
import './App.css';
import React, {Component, useRef, useState} from 'react'
import CanvasDraw from 'react-canvas-draw'



function App() {

  const firstCanvas = useRef(null)


  const effacer = () =>{
    firstCanvas.current.clear()
  }
  
  const setColor = () =>{ 
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
          <div class = "container-all-color"> 
            <div class="color-row1">
              <button id="grey" onClick={setColor}> 
              </button>
              <button id="black" onClick={setColor}> 
              </button>
              <button id="maroon" onClick={setColor}> 
              </button>
              <button id="red" onClick={setColor}> 
              </button>
            </div>
            <div class="color-row2">
              <button id="orange" onClick={setColor}> 
              </button>
              <button id="yellow" onClick={setColor}> 
              </button>
              <button id="yellow-green" onClick={setColor}> 
              </button>
              <button id="green" onClick={setColor}> 
              </button>
            </div>
            <div class="color-row3">
              <button id="cyan" onClick={setColor}> 
              </button>
              <button id="blue" onClick={setColor}> 
              </button>
              <button id="purple" onClick={setColor}> 
              </button>
              <button id="beige" onClick={setColor}> 
              </button>
            </div>
          </div>
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
