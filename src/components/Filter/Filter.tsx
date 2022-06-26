import React, {useState} from 'react';
import {nameButtonType} from "../../App";
import Button from "./Button";


type CurrentMoney = {
    banknots: string
    value: number
    number: string
}


type FilterPropsType = {
    currentMoney: Array<CurrentMoney>
    filterHandler: (name: nameButtonType) => void
}


const Filter = (props: FilterPropsType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((bank, index) => {
                    return (
                        <li key={index}>
                            <span> {bank.banknots}</span>
                            <span> {bank.value}</span>
                            <span> {bank.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button callBack={() => props.filterHandler('all')} name={'all'}/>
                <Button callBack={() => props.filterHandler('RUBLS')} name={'ruble'}/>
                <Button callBack={() => props.filterHandler('Dollars')} name={'dollar'}/>

                {/*<button onClick={() => props.filterHandler('all')}>all</button>*/}
                {/*<button onClick={() => props.filterHandler('RUBLS')}>ruble</button>*/}
                {/*<button onClick={() => props.filterHandler('Dollars')}>dollar</button>*/}
            </div>
        </div>
    );
};

export default Filter;