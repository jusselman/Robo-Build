import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';

class Checkout extends Component {
    state = {
        parts: {
            head: 1,
            arms1: 1,
            arms2: 1,
            arms3: 1,
            legs1: 1
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    parts={this.state.parts}
                />
            </div>
        )
    }
}

export default Checkout;