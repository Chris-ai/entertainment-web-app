"use client";
import React from "react";
import Image from "next/image";
import CategoryMovies from "@/assets/icons/icon-category-movie.svg";
import CategoryTv from "@/assets/icons/icon-category-tv.svg";
import {MediaEntity} from "@/app/api/media/types";
import MediaCardImage from "@/components/common/MediaCardImage";
import MediaLargeCardImage from "@/components/common/MediaLargeCardImage";
import BookmarkButton from "@/components/common/BookmarkButton";
interface IProps {
    mediaElement: MediaEntity,
    variant?: "default" | "large"
}


const Category: React.FC<{ category: "Movie" | "TV Series" }> = ({category}) => {
    switch (category) {
        case "Movie":
            return (
                <>
                    <Image src={CategoryMovies} alt={"category-image"} height={12} width={12}/>
                    <p>{category}</p>
                </>


            );
        case "TV Series":
            return (
                <>
                    <Image src={CategoryTv} alt={"category-image"} height={12} width={12}/>
                    <p>{category}</p>
                </>
            );
    }
};

const MediaInfo: React.FC<{
    year: number,
    category: "Movie" | "TV Series",
    rating: string}> = ({year, category, rating}) => {
    return (
        <div className={"flex gap-x-1.5 text-white text-opacity-75 justify-start items-center text-xs"}>
            <p>{year}</p>
            <div className={"h-[2px] w-[2px] bg-white"}></div>
            <Category category={category}/>
            <div className={"h-[2px] w-[2px] bg-white"}></div>
            <p>{rating}</p>
        </div>
    );
};

const MediaCard: React.FC<IProps> = ({mediaElement, variant = "default"}) => {

    if(variant === "large") {
        return (
            <div className={"flex flex-col justify-between w-[240px] md:w-[470px] relative"}>
                <MediaLargeCardImage thumbnail={mediaElement.thumbnail} />
                <BookmarkButton isBookmarked={mediaElement.isBookmarked} onClick={() => {}} />
                <div className={"absolute left-4 bottom-4 md:left-6 md:bottom-6 flex flex-col gap-y-1.5"}>
                    <div className={"flex md:hidden gap-x-1.5 text-white text-opacity-75 justify-start items-center text-xs"}>
                        <p>{mediaElement.year}</p>
                        <div className={"h-[2px] w-[2px] bg-white"}></div>
                        <Category category={mediaElement.category}/>
                    </div>
                    <div className={'hidden md:block'}>
                        <MediaInfo year={mediaElement.year} category={mediaElement.category} rating={mediaElement.rating} />
                    </div>
                    <p className={"text-[0.875rem]"}>{mediaElement.title}</p>
                </div>

                <div className={'absolute right-4 bottom-4 md:right-6 md:bottom-6 block md:hidden'}>
                    <div className={'bg-white bg-opacity-10 rounded-full py-1 px-2'}>
                        <p>{mediaElement.rating}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={"flex flex-col gap-y-1.5 max-w-[280px]"}>
            <MediaCardImage isBookmarked={mediaElement.isBookmarked} thumbnail={mediaElement.thumbnail} />
            <MediaInfo year={mediaElement.year} category={mediaElement.category} rating={mediaElement.rating} />
            <div>
                <p className={"text-[0.875rem]"}>{mediaElement.title}</p>
            </div>
        </div>
    );
};


export default MediaCard;