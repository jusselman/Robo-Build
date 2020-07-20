import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactInfo from './ContactInfo/ContactInfo';
import { connect } from 'react-redux';

class Checkout extends Component {

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
                    parts={this.props.prts}
                    cancelCheckout={this.cancelCheckoutHandler}
                    realizeCheckout={this.continueCheckoutHandler}
                />
                <Route
                    path={this.props.match.path + '/contact-info'}
                    component={ContactInfo}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        prts: state.parts,
    }
}

export default connect(mapStateToProps)(Checkout);