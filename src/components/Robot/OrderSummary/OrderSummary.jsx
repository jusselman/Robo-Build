import React, { Component } from 'react';
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render() {

        const partSummary = Object.keys(this.props.parts)
            .map(pKey => {
                return (
                    <li key={pKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {pKey}
                        </span>:{this.props.parts[pKey]}
                    </li>
                )
            });

        return (
            <div className="OrderSummary">
                <h1>Robot Order</h1>
                <p>Your bot has the following parts: </p>
                <ul className={classes.uList}>
                    {partSummary}
                </ul>
                <p>Total Price: {this.props.price.toFixed(2)}</p>
                <p>Checkout?</p>
                <Button btnType="Danger" clicked={this.props.buyCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.buyRealized}>CONTINUE</Button>
            </div>
        )
    }
};

export default OrderSummary;