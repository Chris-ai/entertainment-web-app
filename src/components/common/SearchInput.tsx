'use client'
import Image from "next/image";
import SearchIcon from '@/assets/icons/icon-search.svg';
import Input from "@/components/common/Input";
import {useState} from "react";
import useLocalization from "@/hooks/useLocalization";


const SearchInput = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [query, setQuery] = useState<string>('');
    const {t} = useLocalization();

    const onChange = (value: string) => {
        setInputValue(value)
    }

    const onBlur = (value: string) => {
        if(value && query !== value){
            setQuery(value)
        }
    }

    const onKeyDown = (keyCode: string, value: string) => {
        if(keyCode === 'Enter' && query !== value){
            setQuery(value)
        }
    }

    return (
        <div className={'flex gap-x-4 items-start w-full'}>
            <Image src={SearchIcon} alt={'search-icon'} width={24} height={24} />
            <Input value={inputValue} onChange={onChange} onBlur={onBlur} onKeyDown={onKeyDown} placeholder={t('searchQueryPlaceholder')}/>
        </div>
    )
}

export default SearchInput;