import React from 'react';
import classes from './CheckoutSummary.module.css';
import Robot from '../Robot/Robot';
import Button from '../UI/Button/Button';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Robot Preview</h1>
            <h2>Click below to Proceed or Cancel</h2>
            <div className={classes.CheckoutContainer}>
                <Robot
                    parts={props.parts}
                />
            </div>
            <Button
                btnType="Danger"
                clicked={props.cancelCheckout}>
                CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={props.realizeCheckout}>
                PROCEED
            </Button>
        </div>
    )
}

export default CheckoutSummary;
