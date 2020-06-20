import React, { Component } from 'react';
import classes from './Parts.module.css';
import PropTypes from 'prop-types';


class Parts extends Component {
    render() {
        let part = null;

        switch (this.props.type) {
            case ('ahead'):
                part = <div className={classes.Head}></div>;
                break;
            case ('arms1'):
                part = <div className={classes.Arms1}></div>;
                break;
            case ('arms2'):
                part = <div className={classes.Arms2}></div>;
                break;
            case ('arms3'):
                part = <div className={classes.Arms3}></div>;
                break;
            case ('legs1'):
                part = <div className={classes.Legs1}></div >
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
