'use client'
import Image from "next/image";
import SearchIcon from '@/assets/icons/icon-search.svg';
import Input from "@/components/common/Input";
import {useState} from "react";
import useLocalization from "@/hooks/useLocalization";


const SearchInput = () => {
    const [query, setQuery] = useState<string>('');
    const {t} = useLocalization();

    const onChange= (value: string) => {
        setQuery(value)
    }
    return (
        <div className={'flex gap-x-4 items-start'}>
            <Image src={SearchIcon} alt={'search-icon'} width={24} height={24} />
            <Input value={query} onChange={onChange} placeholder={t('searchQueryPlaceholder')} />
        </div>
    )
}

export default SearchInput;