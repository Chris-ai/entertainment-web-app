'use client'
import cn from "classnames";
import React from "react";
import {Thumbnail} from "@/app/api/media/types";
import Image from "next/image";
import BookmarkButton from "@/components/common/BookmarkButton";

interface IProps {
    isBookmarked: boolean,
    thumbnail: Thumbnail,
    onClick: () => void
}

const ResponsiveImage: React.FC<{imageSources: Thumbnail}> = ({imageSources}) => {
    const imageClassNames = 'rounded-lg mb-0.5 w-full'
    return(
        <>
            <Image src={`${imageSources.regular.small}`} alt={'media-card-image-small'} className={cn(imageClassNames,'block md:hidden')} width={164} height={110}/>
            <Image src={`${imageSources.regular.medium}`} alt={'media-card-image-medium'} className={cn(imageClassNames,'hidden md:block lg:hidden')} width={220} height={140}/>
            <Image src={`${imageSources.regular.large}`} alt={'media-card-image-large'} className={cn(imageClassNames,'hidden lg:block')} width={280} height={174}/>
        </>
    )
}

const MediaCardImage:React.FC<IProps> = ({isBookmarked, thumbnail, onClick}) => {

    const handleOnClick = () => {
        onClick();
    }
    return (
        <div className={'flex justify-center items-center relative'}>
            <BookmarkButton isBookmarked={isBookmarked} onClick={handleOnClick} />
            <ResponsiveImage imageSources={thumbnail} />
        </div>
    );
};

export default MediaCardImage;
