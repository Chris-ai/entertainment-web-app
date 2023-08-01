import {MediaEntity} from "@/app/api/media/types";
import MediaCard from "@/components/common/MediaCard";
import React from "react";

interface IProps {
    media: MediaEntity[]
}

const MediaList:React.FC<IProps> = ({media}) => {
    return (
        <div className={'grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
            {media.map(mediaElement =>
                <MediaCard
                    key={`${mediaElement.title}_${mediaElement.year}_${mediaElement.category}`}
                    mediaElement={mediaElement}
                />)}
        </div>
    )
}

export default MediaList;