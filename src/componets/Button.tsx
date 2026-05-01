import React from 'react';

type ButtonMicroProps = {
    name: string;
    callBack: () => void;
}

export const ButtonMicro = (props:ButtonMicroProps) => {

    const onClickButtonHandler = () => {
        props.callBack();
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};