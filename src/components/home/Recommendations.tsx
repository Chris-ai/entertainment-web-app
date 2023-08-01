import useLocalization from "@/hooks/useLocalization";
import Header from "@/components/common/Header";
import MediaCard from "@/components/common/MediaCard";
import {MediaEntity} from "@/app/api/media/types";
import MediaList from "@/components/common/MediaList";
import React from "react";
interface IProps {
    recommendations: MediaEntity[]
}
const Recommendations: React.FC<IProps> = ({recommendations}) => {
    const {t} = useLocalization();

    return (
        <div className={'flex flex-col gap-y-6'}>
            <Header title={`${t('recommendedForYou')}`} />
            <MediaList media={recommendations} />
        </div>
    );
};


export default Recommendations;