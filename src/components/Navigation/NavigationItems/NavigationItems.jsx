import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem';
import Hamburger from '../Hamburger/Hamburger';


const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active={false}>RoboBuilder</NavigationItem>
            <NavigationItem link="/" active={false}>Checkout</NavigationItem>
            <Hamburger />
        </ul>
    )
}

export default NavigationItems; 
