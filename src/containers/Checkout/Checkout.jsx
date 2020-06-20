import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactInfo from './ContactInfo/ContactInfo';

class Checkout extends Component {
    state = {
        parts: {
            ahead: 1,
            arms1: 1,
            arms2: 1,
            arms3: 1,
            legs1: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const parts = {};
        for (let param of query.entries()) {
            parts[param[0]] = +param[1];
        }
        this.setState({ parts: parts })
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    parts={this.state.parts}
                    cancelCheckout={this.cancelCheckoutHandler}
                    continueCheckout={this.continueCheckoutHandler}
                />
                <Route
                    path={this.props.match.path + './contact-info'}
                    component={ContactInfo}
                />
            </div>
        )
    }
}

export default Checkout;