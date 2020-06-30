import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.module.css';
import axios from '../../../axios-orders';

class ContactInfo extends Component {
    state = {
        name: '',
        email: '',
        address: {
            streetNumber: '',
            zipCode: ''
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const order = {
            parts: this.props.parts,
            price: this.props.totalPrice,
            client: {
                name: 'Josue Uselmano',
                address: {
                    street: 'Hyde St 204',
                    zip: '94091',
                    country: 'United States'
                },
                email: 'josue@nosway'
            },
            deliverType: 'express'
        }

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false, buying: false });
            })
            .catch(err => {
                this.setState({ loading: false, buying: false });
            });
    }

    render() {
        return (
            <div className={classes.ContactInfo}>
                <h2>Please Enter Contact Info</h2>
                <form>
                    <input className={classes.Input} type='text' name='name' placerholder="Name" />
                    <input className={classes.Input} type='email' name='email' placerholder="Email" />
                    <input className={classes.Input} type='text' name='street' placerholder="Street" />
                    <input className={classes.Input} type='text' name='postal' placerholder="Postal Code" />
                    <Button
                        className={classes.InfoBtn}
                        btnType="Success"
                        clicked={this.orderHandler}
                    >Order</Button>
                </form>
            </div>
        )
    }

}

export default ContactInfo;
