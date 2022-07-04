import React, {ChangeEvent} from 'react';

type OnlyInputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const OnlyInput = (props:OnlyInputPropsType) => {
    const onChangeInputHundler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <>
            <input value={props.title} onChange={onChangeInputHundler}/>
        </>
    );
};

