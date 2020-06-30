import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactInfo from './ContactInfo/ContactInfo';

class Checkout extends Component {
    state = {
        parts: null,
        price: 0
    }

    componentWillMount = () => {
        const query = new URLSearchParams(this.props.location.search);
        const parts = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            } else {
                parts[param[0]] = +param[1]
            }
        }
        this.setState({ parts: parts, totalPrice: price })
        console.log(price);
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-info');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    parts={this.state.parts}
                    cancelCheckout={this.cancelCheckoutHandler}
                    realizeCheckout={this.continueCheckoutHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-info'}
                    render={() => (
                        <ContactInfo
                            parts={this.state.parts}
                            price={this.state.totalPrice}
                        />)}
                />
            </div>
        )
    }
}

export default Checkout;