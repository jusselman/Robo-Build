import React from 'react'
import classes from './MenuToggle.module.css';

const MenuToggle = (props) => {
    return (
        <div onClick={props.clicked} className={classes.MenuToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuToggle; 
