import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem';


const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active={false}>RoboBuilder</NavigationItem>
            <NavigationItem link="/" active={false}>Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems; 
