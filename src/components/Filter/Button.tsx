import React from 'react';

type ButtonPropsType = {
    callBack: () => void
    name: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <>
            <button onClick={props.callBack}>{props.name}</button>
        </>
    );
};

export default Button;