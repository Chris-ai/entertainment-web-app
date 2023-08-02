'use client'
import React from "react";
import cn from "classnames";

interface IProps{
    classNames?: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void,
}

const Input:React.FC<IProps> = ({classNames, value, onChange, placeholder}) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <div className={'w-full'}>
            <input
                type={'text'}
                value={value}
                onChange={handleOnChange}
                placeholder={placeholder}
                className={cn('bg-transparent text-base placeholder-opacity-50 text-white outline-0 border-b border-b-transparent focus:border-b focus:border-b-greyish-blue w-full pb-4', classNames)}/>
        </div>
    );
};

export default Input;