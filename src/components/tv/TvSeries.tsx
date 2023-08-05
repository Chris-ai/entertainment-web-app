'use client'
import Header from "@/components/common/Header";
import React, {useEffect, useMemo, useState} from "react";
import {MediaEntity} from "@/app/api/media/types";
import useLocalization from "@/hooks/useLocalization";
import MediaList from "@/components/common/media/MediaList";
import SearchInput from "@/components/common/SearchInput";
import {getTvSeries} from "@/service/media/mediaService";
import LoadingSquares from "@/components/common/LoadingSquares";

const TvSeries: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [tvSeries, setTvSeries] = useState<MediaEntity[]>([]);
    const [isMediaLoading, setIsMediaLoading] = useState<boolean>(true);

    const {t} = useLocalization();

    const fetchData = async (query?: string) => {
        setIsMediaLoading(true)
        const tvSeries = await getTvSeries(query !== '' ? query : undefined)
        setTvSeries(tvSeries)
        setIsMediaLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const search = (query: string) => {
        setQuery(query);
        fetchData(query);
    }

    const title = useMemo(() => {
        return query ? `Found ${tvSeries.length} results for ${query}` : `${t('tvSeries')}`;
    }, [tvSeries])

    return (
        <div className={'flex flex-col gap-y-6 w-full py-6 lg:py-10 '}>
            <SearchInput search={search}/>
            <Header title={title} />
            {isMediaLoading
                ? <div className={'flex justify-center items-center'}>
                    <LoadingSquares/>
                </div>
                : <MediaList media={tvSeries}/>
            }
        </div>
    );
};

export default TvSeries;