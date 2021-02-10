import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react'
import CanvasDraw from 'react-canvas-draw'
function App() {
  return (
    <div>
      <CanvasDraw 
       brushRadius={0.3} 
      hideGrid={true}
      style={{border:'1px solid #000'}}
      />
    </div>
  );
}

export default App;
