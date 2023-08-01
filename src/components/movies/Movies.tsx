import Header from "@/components/common/Header";
import MediaCard from "@/components/common/MediaCard";
import React from "react";
import {MediaEntity} from "@/app/api/media/types";
import useLocalization from "@/hooks/useLocalization";
import MediaList from "@/components/common/MediaList";
import SearchInput from "@/components/home/SearchInput";

interface IProps {
    movies: MediaEntity[]
}

const Movies: React.FC<IProps> = ({movies}) => {
    const {t} = useLocalization();

    return (
        <div className={'flex flex-col gap-y-6 w-full py-10'}>
            <SearchInput />
            <Header title={`${t('movies')}`}/>
            <MediaList media={movies}/>
        </div>
    );
};

export default Movies;