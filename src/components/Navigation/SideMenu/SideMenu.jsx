import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideMenu.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideMenu = (props) => {
    let attachedClasses = [classes.SideMenu, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideMenu, classes.Open];
    }
    return (
        <>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    )
}

export default SideMenu;
