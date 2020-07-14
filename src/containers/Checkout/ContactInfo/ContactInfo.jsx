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
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
            ,
            street: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Street Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zip: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 6
                },
                valid: false,
                touched: false
            },
            country: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elType: 'input',
                elConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliverType: {
                elType: 'select',
                elConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                        { value: 'wildcare', displayValue: 'Wild Card' }
                    ]
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formValid: false,
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

    validityCheck(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputHandler = (e, inputIdentity) => {
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedFormEl = {
            ...updatedForm[inputIdentity]
        };
        updatedFormEl.value = e.target.value;
        updatedFormEl.valid = this.validityCheck(updatedFormEl.value, updatedFormEl.validation);
        updatedFormEl.touched = true;
        updatedForm[inputIdentity] = updatedFormEl;

        let formValid = true;
        for (let inputIdentifier in updatedForm) {
            formValid = updatedForm[inputIdentifier].valid && formValid;
        }
        this.setState({ orderForm: updatedForm, formValid: formValid });
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
                        invalid={!formEl.config.valid}
                        shouldValidate={formEl.config.validation}
                        touched={formEl.config.touched}
                        changed={(e) => this.inputHandler(e, formEl.id)}
                    />
                ))}
                <Button
                    className={classes.InfoBtn}
                    btnType="Success"
                    disabled={!this.state.formValid}
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
