'use client'
import Header from "@/components/common/Header";
import React, {useMemo} from "react";
import {MediaEntity} from "@/app/api/media/types";
import useLocalization from "@/hooks/useLocalization";
import MediaList from "@/components/common/MediaList";
import SearchInput from "@/components/home/SearchInput";

interface IProps {
    bookmarks: MediaEntity[]
}

const Bookmarks:React.FC<IProps> = ({bookmarks}) => {
    const {t} = useLocalization();

    const bookmarkedMovies: MediaEntity[] = useMemo(() => {
        return bookmarks.filter(bookmark => bookmark.category === 'Movie');
    }, [bookmarks])

    const bookmarkedTvSeries: MediaEntity[] = useMemo(() => {
        return bookmarks.filter(bookmark => bookmark.category === 'TV Series');
    }, [bookmarks])

    return (
        <div className={'flex flex-col gap-y-6 w-full py-10 w-full py-10'}>
            <SearchInput/>
            <Header title={`${t('bookmarkedMovies')}`} />
            <MediaList media={bookmarkedMovies} />
            <Header title={`${t('bookmarkedTv')}`} />
            <MediaList media={bookmarkedTvSeries} />
        </div>
    );
};

export default Bookmarks;