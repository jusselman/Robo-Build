import React from 'react';
import classes from './Robot';
import Parts from './Parts/Parts';

const Robot = (props) => {
    return (
        <div className={classes.Robot}>
            <Parts type="robot-head" />
            <Parts type="robot-torso" />
            <Parts type="robot-arms" />
            <Parts type="robot-hands" />
            <Parts type="robot-legs" />
            <Parts type="robot-feet" />
        </div>
    );
};

export default Robot; 
