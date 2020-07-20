import React, { Component } from 'react';
import { connect } from 'react-redux';

import Robot from '../../components/Robot/Robot';
import BuildControls from '../../components/Robot/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Robot/OrderSummary/OrderSummary';
import Loading from '../../components/UI/Loading/Loading';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import axios from '../../axios-orders';
import * as actionTypes from '../../store/actions';

class RoboBuilder extends Component {

    state = {
        buying: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        // axios.get('https://robot-builder-58e42.firebaseio.com/parts.json')
        //     .then(res => {
        //         this.setState({ parts: res.data })
        //     })
        //     .catch(err => {
        //         this.setState({ err: true })
        //     })
    };

    updateBuyState(parts) {
        const sum = Object.keys(parts)
            .map(pKey => {
                return parts[pKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    // addPartHandler = (type) => {
    //     const prevCount = this.state.parts[type];
    //     const updatedCount = prevCount + 1;
    //     const updatedParts = {
    //         ...this.state.parts
    //     };
    //     updatedParts[type] = updatedCount;
    //     const addPrice = PARTS_PRICES[type];
    //     const prevPrice = this.state.totalPrice;
    //     const updatedPrice = prevPrice + addPrice;
    //     this.setState({ totalPrice: updatedPrice, parts: updatedParts });
    //     this.updateBuyState(updatedParts);
    // }

    // removePartHandler = (type) => {
    //     const prevCount = this.state.parts[type];
    //     if (prevCount <= 0) {
    //         return;
    //     }
    //     const updatedCount = prevCount - 1;
    //     const updatedParts = {
    //         ...this.state.parts
    //     };
    //     updatedParts[type] = updatedCount;
    //     const subractPrice = PARTS_PRICES[type];
    //     const prevPrice = this.state.totalPrice;
    //     const updatedPrice = prevPrice - subractPrice;
    //     this.setState({ totalPrice: updatedPrice, parts: updatedParts });
    //     this.updateBuyState(updatedParts);
    // }

    buyHandler = () => {
        this.setState({ buying: true })
    }

    buyCancelHandler = () => {
        this.setState({ buying: false });
    }

    cancelCheckoutHandler = () => {
        this.setState({ buying: false });
    }

    realizedCheckoutHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.prts
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }


        let orderSummary = null;

        let robot = this.state.error ? <p>Parts cannot be loaded</p> : <Loading />;

        if (this.props.prts) {
            robot = (
                <>
                    <Robot
                        parts={this.props.prts}
                    />
                    <BuildControls
                        partAdded={this.props.onPartAdded}
                        partSubtracted={this.props.onPartDeleted}
                        disabled={disabledInfo}
                        price={this.props.price}
                        buyable={this.updateBuyState(this.props.prts)}
                        bought={this.buyHandler}
                    />
                </>
            );
            orderSummary = <OrderSummary
                parts={this.props.prts}
                buyCancelled={this.cancelCheckoutHandler}
                buyRealized={this.realizedCheckoutHandler}
                price={this.props.price}
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

const mapStateToProps = state => {
    return {
        prts: state.parts,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPartAdded: (prtName) => dispatch({ type: actionTypes.ADD_PART, partName: prtName }),
        onPartDeleted: (prtName) => dispatch({ type: actionTypes.DELETE_PART, partName: prtName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(RoboBuilder, axios)); 