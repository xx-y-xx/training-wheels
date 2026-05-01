import React, {ChangeEvent} from 'react';

type InputMicroProps = {
    title: string;
    setTitle: (title: string) => void;
}



export const InputMicro = (props:InputMicroProps) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};