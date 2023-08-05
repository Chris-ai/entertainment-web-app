'use client'
import Header from "@/components/common/Header";
import React, {useEffect, useMemo, useState} from "react";
import {MediaEntity} from "@/app/api/media/types";
import useLocalization from "@/hooks/useLocalization";
import MediaList from "@/components/common/media/MediaList";
import SearchInput from "@/components/common/SearchInput";
import {getBookmarks, getMovies} from "@/service/media/mediaService";
import LoadingSquares from "@/components/common/LoadingSquares";

const Bookmarks: React.FC = () => {
    const {t} = useLocalization();
    const [query, setQuery] = useState<string>('');
    const [bookmarks, setBookmarks] = useState<MediaEntity[]>([]);
    const [isMediaLoading, setIsMediaLoading] = useState<boolean>(true);


    const fetchData = async (query?: string) => {
        setIsMediaLoading(true)
        const movies = await getBookmarks(query !== '' ? query : undefined)
        setBookmarks(movies)
        setIsMediaLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const bookmarkedMovies: MediaEntity[] = useMemo(() => {
        return bookmarks.filter(bookmark => bookmark.category === 'Movie');
    }, [bookmarks])

    const bookmarkedTvSeries: MediaEntity[] = useMemo(() => {
        return bookmarks.filter(bookmark => bookmark.category === 'TV Series');
    }, [bookmarks])

    const search = (query: string) => {
        setQuery(query);
        fetchData(query);
    }

    const bookmarkedMoviesTitle = useMemo(() => {
        return query ? `Found ${bookmarkedMovies.length} movies for ${query}` : `${t('bookmarkedMovies')}`;
    }, [bookmarkedMovies])

    const bookmarkedTvSeriesTitle = useMemo(() => {
        return query ? `Found ${bookmarkedTvSeries.length} tvSeries for ${query}` : `${t('bookmarkedTv')}`;
    }, [bookmarkedTvSeries])

    return (
        <div className={'flex flex-col gap-y-6 w-full py-6 lg:py-10'}>
            <SearchInput search={search}/>
            <Header title={bookmarkedMoviesTitle}/>
            {isMediaLoading
                ? <div className={'flex justify-center items-center'}>
                    <LoadingSquares/>
                </div>
                : <MediaList media={bookmarkedMovies}/>
            }
            <Header title={bookmarkedTvSeriesTitle}/>
            {isMediaLoading
                ? <div className={'flex justify-center items-center'}>
                    <LoadingSquares/>
                </div>
                : <MediaList media={bookmarkedTvSeries}/>
            }
        </div>
    );
};

export default Bookmarks;