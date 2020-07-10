import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {

    let inputEl = null;

    switch (props.elType) {
        case ('input'):
            inputEl = <input
                className={classes.InputEl}
                {...props.elConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break
        case ('textarea'):
            inputEl = <textarea
                className={classes.InputEl}
                {...props.elConfig}
                value={props.value}
                onChange={props.changed}
            />;
            break;
        case ('select'):
            inputEl = (
                <select
                    className={classes.InputEl}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elConfig.options.map(option => (
                        <option value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputEl = <input
                className={classes.InputEl}
                {...props.elConfig}
                value={props.value} />;
    }

    return (
        <div>
            <label className={classes.Label}>{props.label}</label>
            {inputEl}
        </div>
    )
}

export default Input;
