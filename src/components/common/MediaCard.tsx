import React from "react";
import Image from "next/image";
import CategoryMovies from '@/assets/icons/icon-category-movie.svg';
import CategoryTv from '@/assets/icons/icon-category-tv.svg'
import {MediaEntity} from "@/app/api/media/types";
import MediaCardImage from "@/components/common/MediaCardImage";

interface IProps {
    mediaElement: MediaEntity
}


const Category: React.FC<{ category: 'Movie' | 'TV Series' }> = ({category}) => {
    switch (category) {
        case "Movie":
            return (
                <>
                    <Image src={CategoryMovies} alt={'category-image'} height={12} width={12}/>
                    <p>{category}</p>
                </>


            )
        case "TV Series":
            return (
                <>
                    <Image src={CategoryTv} alt={'category-image'} height={12} width={12}/>
                    <p>{category}</p>
                </>
            )
    }
}

const MediaCard: React.FC<IProps> = ({mediaElement}) => {
    return (
        <div className={'flex flex-col gap-y-1.5 max-w-[280px]'}>
            <MediaCardImage isBookmarked={mediaElement.isBookmarked} thumbnail={mediaElement.thumbnail} />
            <div className={'flex gap-x-1.5 text-white text-opacity-75 justify-start items-center text-xs'}>
                <p>{mediaElement.year}</p>
                <div className={'h-[2px] w-[2px] bg-white'}></div>
                <Category category={mediaElement.category}/>
                <div className={'h-[2px] w-[2px] bg-white'}></div>
                <p>{mediaElement.rating}</p>
            </div>
            <div>
                <p className={'text-[0.875rem]'}>{mediaElement.title}</p>
            </div>
        </div>
    );
};


export default MediaCard;