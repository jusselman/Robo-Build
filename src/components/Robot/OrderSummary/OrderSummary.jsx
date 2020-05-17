import React from 'react';
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const partSummary = Object.keys(props.parts)
        .map(pKey => {
            return (
                <li key={pKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {pKey}
                    </span>:{props.parts[pKey]}
                </li>
            )
        });

    return (
        <>
            <h1>Robot Order</h1>
            <p>Your bot has the following parts: </p>
            <ul className={classes.uList}>
                {partSummary}
            </ul>
            <p>Total Price: {props.price.toFixed(2)}</p>
            <p>Checkout?</p>
            <Button btnType="Danger" clicked={props.buyCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.buyRealized}>CONTINUE</Button>
        </>
    )
}

export default OrderSummary;