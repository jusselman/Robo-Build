import React, { Component } from 'react';
import classes from './Parts.module.css';
import PropTypes from 'prop-types';


class Parts extends Component {
    render() {
        let part = null;

        switch (this.props.type) {
            case ('robot-head'):
                part = <div className={classes.Head}>
                    <div className={classes.Eye1}></div>
                    <div className={classes.Eye2}></div>
                    <div className={classes.Mouth}></div>
                </div>;
                break;
            case ('robot-torso'):
                part = <div className={classes.Torso}></div>;
                break;
            case ('robot-arms'):
                part = <div className={classes.Arms}>
                    <div className={classes.Arm1}></div>
                    <div className={classes.Arm2}></div>
                </div>
                break;
            case ('robot-hands'):
                part = <div className={classes.Arms}>
                    <div className={classes.Hand1}></div>
                    <div className={classes.Hand2}></div>
                </div>
                break;
            case ('robot-legs'):
                part = <div className={classes.Legs}>
                    <div className={classes.Leg1}></div>
                    <div className={classes.Leg2}></div>
                </div>
                break;
            case ('robot-feet'):
                part = <div className={classes.Feet}></div>;
                break;
            default:
                part = null;
        }

        return part;
    }
}

Parts.propTypes = {
    type: PropTypes.string.isRequired
};

export default Parts;
