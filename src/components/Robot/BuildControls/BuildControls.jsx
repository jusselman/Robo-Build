import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Head', type: 'ahead' },
    { label: 'Arms1', type: 'arms1' },
    { label: 'Arms2', type: 'arms2' },
    { label: 'Arms3', type: 'arms3' },
    { label: 'Legs1', type: 'legs1' }
];

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Cost: <b>{props.price.toFixed(2)}</b></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.partAdded(ctrl.type)}
                    subtracted={() => props.partSubtracted(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.buyable}
                onClick={props.bought}
            >Purchase</button>
        </div>
    )
}

export default BuildControls;
