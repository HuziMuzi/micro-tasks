import React, {useState} from 'react';

const Filter = () => {

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


    const onclickFilterHandler = (nameButton: string) => {
        setStatusButton(nameButton)
        console.log(statusButton)
    }

    return (
        <div>
            <ul>
                {currentMoney.map((bank, index) => {
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
                <button onClick={() => onclickFilterHandler('all')}>all</button>
                <button onClick={() => onclickFilterHandler('RUBLS')}>ruble</button>
                <button onClick={() => onclickFilterHandler('Dollars')}>dollar</button>
            </div>
        </div>
    );
};

export default Filter;