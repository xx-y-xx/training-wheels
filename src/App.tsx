import './App.css'
import {useState} from "react";

type FilterType ='all'|'dollar'|'ruble';

function App() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    const [filterMoney, setFilter] = useState<FilterType>('all')

    let currenMoney = money

    if (filterMoney === 'ruble') {
        currenMoney = money.filter((f) => f.banknote === 'ruble')
    }
    if (filterMoney === 'dollar') {
        currenMoney = money.filter((f) => f.banknote === 'dollar')
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }


    return (
        <>
            <ul>
                {currenMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>rubles</button>
                <button onClick={() => onClickFilterHandler("dollar")}>dollars</button>
            </div>
        </>
    );
}

export default App