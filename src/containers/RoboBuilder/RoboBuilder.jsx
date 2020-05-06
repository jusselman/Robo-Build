import React, { Component } from 'react';
import Robot from '../../components/Robot/Robot';
import BuildControls from '../../components/Robot/BuildControls/BuildControls';

class RoboBuilder extends Component {

    state = {
        part: {
            head: 1,
            arms1: 1,
            arms2: 1,
            arms3: 1,
            legs1: 1
        }
    }

    render() {
        return (
            <>
                <Robot
                    part={this.state.part}
                />
                <BuildControls />
            </>
        );
    }
}

export default RoboBuilder; 