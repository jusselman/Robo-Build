import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../components/ErrorHandler/ErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const ordersFetched = [];
                for (let key in res.data) {
                    ordersFetched.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: ordersFetched })
            })
            .catch(err => {
                this.setState({ loading: false })
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        parts={order.parts}
                        price={+order.price}
                    />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios); 