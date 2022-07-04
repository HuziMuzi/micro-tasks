import React, {ChangeEvent, useState} from 'react';
import {FullInput} from "./FullInput";
import {Button} from "./Button";
import {OnlyInput} from "./OnlyInput";

export const Input = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message2'}
    ])

    let [title, setTitle] = useState('')



    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <OnlyInput title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler} />


            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map(el => {
                return (
                    <div>{el.message}</div>
                )
            })}
        </div>
    );
};

