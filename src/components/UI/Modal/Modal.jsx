import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <>
        <Backdrop
            show={props.show}
            clicked={props.modalClosed}
        />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'scale(1)' : 'scale(0)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </>
)

export default Modal;