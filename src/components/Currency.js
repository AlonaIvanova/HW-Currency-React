import React from "react";

function Currency({currency}) {
    return <tr>
        <td>{currency.name}</td>
        <td>{currency.rate.toFixed(2)}</td>
        <td>{currency.cc}</td>
    </tr>
};

export default Currency;