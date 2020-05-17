import React from 'react';
import classes from './Hamburger.module.css';

const Hamburger = (props) => {
    return (
        <div className={classes.Toggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;
