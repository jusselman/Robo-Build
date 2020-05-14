import React, { Component } from 'react';
import Robot from '../../components/Robot/Robot';
import BuildControls from '../../components/Robot/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Robot/OrderSummary/OrderSummary';

const PARTS_PRICES = {
    head: 100,
    arms1: 150,
    arms2: 125,
    arms3: 175,
    legs1: 225
}

class RoboBuilder extends Component {

    state = {
        parts: {
            head: 0,
            arms1: 0,
            arms2: 0,
            arms3: 0,
            legs1: 0
        },
        totalPrice: 0,
        buyable: false,
        buying: false
    }

    updateBuyState(parts) {
        const sum = Object.keys(parts)
            .map(pKey => {
                return parts[pKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ buyable: sum > 0 })
    }

    addPartHandler = (type) => {
        const prevCount = this.state.parts[type];
        const updatedCount = prevCount + 1;
        const updatedParts = {
            ...this.state.parts
        };
        updatedParts[type] = updatedCount;
        const addPrice = PARTS_PRICES[type];
        const prevPrice = this.state.totalPrice;
        const updatedPrice = prevPrice + addPrice;
        this.setState({ totalPrice: updatedPrice, parts: updatedParts });
        this.updateBuyState(updatedParts);
    }

    removePartHandler = (type) => {
        const prevCount = this.state.parts[type];
        if (prevCount <= 0) {
            return;
        }
        const updatedCount = prevCount - 1;
        const updatedParts = {
            ...this.state.parts
        };
        updatedParts[type] = updatedCount;
        const subractPrice = PARTS_PRICES[type];
        const prevPrice = this.state.totalPrice;
        const updatedPrice = prevPrice - subractPrice;
        this.setState({ totalPrice: updatedPrice, parts: updatedParts });
        this.updateBuyState(updatedParts);
    }

    buyHandler = () => {
        console.log('before buying:true');
        this.setState({ buying: true })
        console.log('after buying:true');
    }

    buyCancelHandler = () => {
        this.setState({ buying: false });
    }

    cancelCheckoutHandler = () => {
        this.setState({ buying: false });
    }

    realizedCheckoutHandler = () => {
        alert('Checkout Realized');
    }

    render() {
        const disabledInfo = {
            ...this.state.parts
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (

            <>
                <Modal
                    show={this.state.buying}
                    modalClosed={this.buyCancelHandler}
                >
                    <OrderSummary
                        parts={this.state.parts}
                        buyCancelled={this.cancelCheckoutHandler}
                        buyRealized={this.realizedCheckoutHandler}
                    />
                </Modal>
                <Robot
                    parts={this.state.parts}
                />
                <BuildControls
                    partAdded={this.addPartHandler}
                    partSubtracted={this.removePartHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    buyable={this.state.buyable}
                    bought={this.buyHandler}
                />
            </>
        );
    }
}

export default RoboBuilder; 