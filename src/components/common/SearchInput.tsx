'use client'
import Image from "next/image";
import SearchIcon from '@/assets/icons/icon-search.svg';
import Input from "@/components/common/Input";
import {useState} from "react";
import useLocalization from "@/hooks/useLocalization";


const SearchInput:React.FC<{search: (value: string) => void}> = ({search}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [query, setQuery] = useState<string>('');
    const {t} = useLocalization();

    const onChange = (value: string) => {
        setInputValue(value)
    }

    const onBlur = (value: string) => {
        if(query !== value){
            setQuery(value)
            search(value)
        }
    }

    const onKeyDown = (keyCode: string, value: string) => {
        if(keyCode === 'Enter' && query !== value){
            setQuery(value)
            search(value)
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