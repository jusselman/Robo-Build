import React from 'react';
import Parts from './Parts/Parts';

const Robot = (props) => {
    let modifiedParts = Object.keys(props.part).map(pKey => {
        return [...Array(props.part[pKey])].map((_, idx) => {
            return <Parts key={pKey + idx} type={pKey} />
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
