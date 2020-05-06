import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Head', type: 'head' },
    { label: 'Arms1', type: 'arms1' },
    { label: 'Arms2', type: 'arms2' },
    { label: 'Arms3', type: 'arms3' },
    { label: 'Legs1', type: 'legs1' }
]

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(control => (
                <BuildControl key={control.label} label={control.label} />
            ))}
        </div>
    )
}

export default BuildControls;
