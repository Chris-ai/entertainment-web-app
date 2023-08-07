'use client'
import React from "react";
import cn from "classnames";

interface IProps{
    classNames?: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void,
    onBlur?: (value: string) => void,
    onKeyDown?: (keyCode: string, value: string) => void
}

const Input:React.FC<IProps> = ({classNames, value, onChange, placeholder, onBlur, onKeyDown}) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onBlur) {
            onBlur(event.target.value)
        }
    }

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(onKeyDown){
            onKeyDown(event.code, event.currentTarget.value)
        }
    }

    return (
        <div className={'w-full'}>
            <input
                type={'text'}
                value={value}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                onKeyDown={handleOnKeyDown}
                placeholder={placeholder}
                className={cn('bg-transparent text-base placeholder-opacity-50 text-white outline-0 border-b border-b-transparent focus:border-b focus:border-b-greyish-blue w-full pb-4 sm:font-light sm:text-hm sm:leading-normal', classNames)}/>
        </div>
    );
};

export default Input;