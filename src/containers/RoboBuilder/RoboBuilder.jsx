import React, { Component } from 'react';
import Robot from '../../components/Robot/Robot';
import BuildControls from '../../components/Robot/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Robot/OrderSummary/OrderSummary';
import Loading from '../../components/UI/Loading/Loading';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import axios from '../../axios-orders';

const PARTS_PRICES = {
    head: 100.50,
    arms1: 150.75,
    arms2: 125.25,
    arms3: 175.55,
    legs1: 225.99
}

class RoboBuilder extends Component {

    state = {
        parts: null,
        totalPrice: 0,
        buyable: false,
        buying: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://robot-builder-58e42.firebaseio.com/parts.json')
            .then(res => {
                this.setState({ parts: res.data })
            })
            .catch(err => {
                this.setState({ err: true })
            })
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
        // this.setState({ loading: true })
        // const order = {
        //     parts: this.state.parts,
        //     price: this.state.totalPrice,
        //     client: {
        //         name: 'Josue Uselmano',
        //         address: {
        //             street: 'Hyde St 204',
        //             zip: '94091',
        //             country: 'United States'
        //         },
        //         email: 'josue@nosway'
        //     },
        //     deliverType: 'express'
        // }

        // axios.post('/orders.json', order)
        //     .then(res => {
        //         this.setState({ loading: false, buying: false });
        //     })
        //     .catch(err => {
        //         this.setState({ loading: false, buying: false });
        //     });
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.state.parts
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }


        let orderSummary = null;

        let robot = this.state.error ? <p>Parts cannot be loaded</p> : <Loading />;

        if (this.state.parts) {
            robot = (
                <>
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
            orderSummary = <OrderSummary
                parts={this.state.parts}
                buyCancelled={this.cancelCheckoutHandler}
                buyRealized={this.realizedCheckoutHandler}
                price={this.state.totalPrice}
            />
        }

        if (this.state.loading) {
            orderSummary = <Loading />
        }

        return (
            <>
                <Modal
                    show={this.state.buying}
                    modalClosed={this.buyCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {robot}
            </>
        );
    }
}

export default ErrorHandler(RoboBuilder, axios); 