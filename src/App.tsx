import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MicroMap} from "./MicroMap";


const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]


function App() {
  return (
    <div className="App">
      <MicroMap title={"My Cars"} topCars={topCars}/>
    </div>
  );
}

export default App;
