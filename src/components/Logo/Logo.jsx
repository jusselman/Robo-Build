import React from 'react';
import roboLogo from '../../assets/img/logo.png';
import classes from './Logo.css';

const Logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={roboLogo} alt="logoRobo" />
    </div>
);

export default Logo;
