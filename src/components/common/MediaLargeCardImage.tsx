import {Thumbnail} from "@/app/api/media/types";
import Image from "next/image";
import cn from "classnames";
import React from "react";

interface IProps{
    thumbnail: Thumbnail
}
const MediaLargeCardImage: React.FC<IProps> = ({thumbnail}) => {
    const imageClassNames = 'w-full h-full rounded-lg'
    return(
        <>
            <Image src={`/${thumbnail.trending?.small}`} alt={'media-card-image-small'} className={cn(imageClassNames,'block md:hidden')} width={240} height={140}/>
            <Image src={`/${thumbnail.trending?.large}`} alt={'media-card-image-medium'} className={cn(imageClassNames,'hidden md:block')} width={470} height={230}/>
        </>
    )
};

export default MediaLargeCardImage;