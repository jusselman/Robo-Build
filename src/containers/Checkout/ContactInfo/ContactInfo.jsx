import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.module.css';
import axios from '../../../axios-orders';
import Loading from '../../../components/UI/Loading/Loading';
import Input from '../../../components/UI/Input/Input';

class ContactInfo extends Component {
    state = {
        orderForm: {
            name: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: ''
            }
            ,
            street: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Street Address'
                },
                value: ''
            },
            zip: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },
            country: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: ''
            },
            deliverType: {
                elType: 'select',
                elConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        },
        loading: false

    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElId in this.state.orderForm) {
            formData[formElId] = this.state.orderForm[formElId].value;
        }
        const order = {
            parts: this.props.parts,
            price: this.props.price,
            orderData: formData
        }

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    inputHandler = (e, inputIdentity) => {
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedFormEl = {
            ...updatedForm[inputIdentity]
        };
        updatedFormEl.value = e.target.value;
        updatedForm[inputIdentity] = updatedFormEl;
        this.setState({ orderForm: updatedForm });
    }

    render() {
        const formElArr = [];
        for (let key in this.state.orderForm) {
            formElArr.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElArr.map(formEl => (
                    <Input
                        key={formEl.id}
                        elType={formEl.config.elType}
                        elConfig={formEl.config.elConfig}
                        value={formEl.config.value}
                        changed={(e) => this.inputHandler(e, formEl.id)}
                    />
                ))}
                <Button
                    className={classes.InfoBtn}
                    btnType="Success"
                >Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Loading />
        }
        return (
            <div className={classes.ContactInfo}>
                <h2>Please Enter Contact Info</h2>
                {form}
            </div>
        )
    }

}

export default ContactInfo;
