'use client'
import cn from "classnames";
import Button from "@/components/common/Button";
import React from "react";
import {Thumbnail} from "@/app/api/media/types";
import Image from "next/image";
import BookmarkFull from "@/assets/icons/icon-bookmark-full.svg";
import BookmarkEmpty from "@/assets/icons/icon-bookmark-empty.svg";

interface IProps {
    isBookmarked: boolean,
    thumbnail: Thumbnail
}

const ResponsiveImage: React.FC<{imageSources: Thumbnail}> = ({imageSources}) => {
    const imageClassNames = 'rounded-lg mb-0.5 w-full'
    return(
        <>
            <Image src={`/${imageSources.regular.small}`} alt={'media-card-image-small'} className={cn(imageClassNames,'block md:hidden')} width={164} height={110}/>
            <Image src={`/${imageSources.regular.medium}`} alt={'media-card-image-medium'} className={cn(imageClassNames,'hidden md:block lg:hidden')} width={220} height={140}/>
            <Image src={`/${imageSources.regular.large}`} alt={'media-card-image-large'} className={cn(imageClassNames,'hidden lg:block')} width={280} height={174}/>
        </>
    )
}

const BookmarkButton: React.FC<{isBookmarked: boolean}> = ({isBookmarked}) => {
    if(isBookmarked){
        return (
            <Image src={BookmarkFull} alt={'bookmark-full-button'} width={32} height={32} className={'h-4 w-4'} />
        )
    }
    else {
        return (
            <Image src={BookmarkEmpty} alt={'bookmark-empty-button'} width={32} height={32} className={'h-4 w-4'}/>
        )
    }
}

const MediaCardImage:React.FC<IProps> = ({isBookmarked, thumbnail}) => {
    return (
        <div className={'flex justify-center items-center relative'}>
            <div className={'absolute right-2 top-2 bg-dark-blue bg-opacity-25 rounded-full'}>
                <Button
                    className={'p-2'}
                    appearance={'transparent'}
                    type={'icon'}
                    onClick={() => {console.log('bookmark media')}}>
                    <BookmarkButton isBookmarked={isBookmarked} />
                </Button>
            </div>
            <ResponsiveImage imageSources={thumbnail} />
        </div>
    );
};

export default MediaCardImage;
