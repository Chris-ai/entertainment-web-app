'use client'
import Header from "@/components/common/Header";
import React, {useEffect, useState, useMemo} from "react";
import {MediaEntity} from "@/app/api/media/types";
import useLocalization from "@/hooks/useLocalization";
import MediaList from "@/components/common/media/MediaList";
import SearchInput from "@/components/common/SearchInput";
import {getMovies} from "@/service/media/mediaService";
import LoadingSquares from "@/components/common/LoadingSquares";

const Movies: React.FC = () => {
    const {t} = useLocalization();
    const [query, setQuery] = useState<string>('');
    const [movies, setMovies] = useState<MediaEntity[]>([]);
    const [isMediaLoading, setIsMediaLoading] = useState<boolean>(true);

    const fetchData = async (query?: string) => {
        setIsMediaLoading(true)
        const movies = await getMovies(query !== '' ? query : undefined)
        setMovies(movies)
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
       return query ? `Found ${movies.length} results for ${query}` : `${t('movies')}`;
    }, [movies])

    return (
        <div className={'flex flex-col gap-y-6 w-full py-6 lg:py-10 '}>
            <SearchInput search={search}/>
            <Header title={title}/>
            {isMediaLoading
                ? <div className={'flex justify-center items-center'}>
                    <LoadingSquares/>
                </div>
                : <MediaList media={movies}/>

            }
        </div>
    );
};

export default Movies;