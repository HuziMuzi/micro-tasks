import React, {useState} from 'react';
import {FullInput} from "./FullInput";

export const Input = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message2'}
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {message.map(el => {
                return (
                    <div>{el.message}</div>
                )
            })}
        </div>
    );
};

