import React from 'react';
import Parts from './Parts/Parts';

const Robot = (props) => {
    let modifiedParts = Object.keys(props.parts).map(partKey => {
        return [...Array(props.parts[partKey])].map((_, idx) => {
            return <Parts key={partKey + idx} type={partKey} />
        });
    })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (modifiedParts.length === 0) {
        modifiedParts = <p>Add Parts Here</p>
    }

    return (
        <>
            {modifiedParts}
        </>
    );
};

export default Robot; 
