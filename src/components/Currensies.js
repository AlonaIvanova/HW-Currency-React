import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import Search from "./Search";
import Currency from "./Currency";

function Currencies() {
    const [currencies, setCurrencies] = useState([]);
    const [filteredCurrencies, setFilteredCurrencies] = useState([]);

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221209&json').then(res => res.json()).then(data => {
            setCurrencies(data.map(currency => ({
                name: currency.txt,
                rate: currency.rate,
                cc: currency.cc
            })));
        });
    }, [])

    function searchByCurrencyName(name) {
        const result = currencies.filter(currency => currency.name.toLowerCase().includes(name));
        setFilteredCurrencies(result);
    }
    
    return <div>
        <Search searchByCurrencyName={searchByCurrencyName} />
        
        <Table striped bordered hover variant="dark" className="col-12">
        <thead className="font-weight-bold">
            <tr><td>Currency</td><td>Rate</td><td>Currency Code</td></tr>
        </thead>
        <tbody>
            {(filteredCurrencies.length ? filteredCurrencies : currencies).map(currency => <Currency
                currency={currency} currencyName={currency.name}
                key={currency.cc} /> )}
        </tbody>
    </Table></div>
    
};

export default Currencies;