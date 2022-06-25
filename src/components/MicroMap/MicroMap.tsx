import React from "react";
import './MicroMap.css'


type topCarsType = {
    manufacturer: string
    model: string
}


type MicroMapPropsType = {
    title: string
    topCars: Array<topCarsType>
}

export const MicroMap = (props: MicroMapPropsType) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>{props.title}</th>
                </tr>
                </thead>
                <tr className='rows'>
                    <td>Manufacturer</td>
                    <td>Model</td>
                </tr>
                {props.topCars.map(item => {
                    return (<tr>
                        <td>{item.manufacturer}</td>
                        <td>{item.model}</td>
                    </tr>)
                })}
            </table>
        </>
    )
}