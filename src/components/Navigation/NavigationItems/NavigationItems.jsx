import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">RoboBuilder</NavigationItem>
            <NavigationItem link="/orders">Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems; 
