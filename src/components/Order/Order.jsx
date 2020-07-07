import React from 'react'
import classes from './Order.module.css';

const Order = (props) => {
    return (
        <div className={classes.Order}>
            <p>
                Parts: Head (1)
            </p>
            <p>
                Price: $250.00
            </p>

        </div>
    )
}

export default Order;
