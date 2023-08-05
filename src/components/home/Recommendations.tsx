import useLocalization from "@/hooks/useLocalization";
import Header from "@/components/common/Header";
import {MediaEntity} from "@/app/api/media/types";
import MediaList from "@/components/common/media/MediaList";
import React from "react";
interface IProps {
    recommendations: MediaEntity[],
    title: string
}
const Recommendations: React.FC<IProps> = ({recommendations, title}) => {
    const {t} = useLocalization();

    return (
        <div className={'flex flex-col gap-y-6'}>
            <Header title={title} />
            <MediaList media={recommendations} />
        </div>
    );
};


export default Recommendations;