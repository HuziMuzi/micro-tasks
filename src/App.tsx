import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MicroMap} from "./components/MicroMap/MicroMap";
import MicroUseState from "./components/useState/MicroUseState";
import Filter from "./components/Filter/Filter";


const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

function App() {




  return (
    <div className="App">
      <Filter/>
      {/*<MicroMap title={"My Cars"} topCars={topCars}/>*/}
      {/*<MicroUseState/>*/}

    </div>
  );
}

export default App;
