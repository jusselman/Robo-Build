import React from 'react'
import classes from './Order.module.css';

const Order = (props) => {
    const parts = [];

    for (let partName in props.parts) {
        parts.push({
            name: partName,
            quantity: props.parts[partName]
        })
    }

    const partOutput = parts.map(prt => {
        return <span
            className={classes.OrderItems}
            key={prt.name}>{prt.name}: {prt.quantity}</span>
    })

    return (
        <div className={classes.Order}>
            <p>Parts: {partOutput} </p>
            <p>
                Price: $<strong>{props.price.toFixed(2)}</strong>
            </p>

        </div>
    )
}

export default Order;
