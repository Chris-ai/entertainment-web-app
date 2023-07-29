import Header from "@/components/common/Header";
import MediaCard from "@/components/common/MediaCard";
import React from "react";
import {MediaEntity} from "@/app/api/media/types";
import useLocalization from "@/hooks/useLocalization";

interface IProps {
    movies: MediaEntity[]
}

const Movies: React.FC<IProps> = ({movies}) => {
    const {t} = useLocalization();

    return (
        <div className={'flex flex-col gap-y-6'}>
            <Header title={`${t('movies')}`} />
            <div className={'grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
                {movies.map(movie =>
                    <MediaCard
                        key={`${movie.title}_${movie.year}_${movie.category}`}
                        mediaElement={movie}
                    />)}
            </div>

        </div>
    );
};

export default Movies;