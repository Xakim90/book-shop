import React, { useState } from "react";

const Currency = (props) => {
    const [currency, setCurrency] = useState("usd");

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="border-black border">
            <select onChange={handleChange}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="rub">RUB</option>
                <option value="aud">AUD</option>
                <option value="sum">SUM</option>
                <option value="jpy">JPY</option>
            </select>
        </div>
    )
}
export default Currency;