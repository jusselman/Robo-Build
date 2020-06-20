import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.module.css';

class ContactInfo extends Component {
    state = {
        name: '',
        email: '',
        address: {
            streetNumber: '',
            zipCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactInfo}>
                <h2>Please Enter Contact Info</h2>
                <form>
                    <input type='text' name='name' placerholder="Name" />
                    <input type='email' name='email' placerholder="Email" />
                    <input type='text' name='street' placerholder="Street" />
                    <input type='text' name='postal' placerholder="Postal Code" />
                    <Button btnType="Success">Order</Button>


                </form>
            </div>
        )
    }

}

export default ContactInfo;
