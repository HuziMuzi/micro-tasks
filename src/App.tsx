import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {MicroMap} from "./components/MicroMap/MicroMap";
import MicroUseState from "./components/useState/MicroUseState";
import Filter from "./components/Filter/Filter";


// const topCars = [
//   {manufacturer:'BMW', model:'m5cs'},
//   {manufacturer:'Mercedes', model:'e63s'},
//   {manufacturer:'Audi', model:'rs6'}
// ]

 export type nameButtonType = 'all' | 'RUBLS' | 'Dollars'

function App() {

  const [money, setMoney] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])

  const [statusButton, setStatusButton] = useState<string>('all')

  let currentMoney = money
  if (statusButton === 'RUBLS') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
  }
  if (statusButton === 'Dollars') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
  }


  const onclickFilterHandler = (nameButton: nameButtonType) => {
    setStatusButton(nameButton)
    console.log(statusButton)
  }


  return (
    <div className="App" >
      <Filter currentMoney={currentMoney} filterHandler={onclickFilterHandler}/>

      {/*<MicroMap title={"My Cars"} topCars={topCars}/>*/}
      {/*<MicroUseState/>*/}
    </div>
  );
}

export default App;
