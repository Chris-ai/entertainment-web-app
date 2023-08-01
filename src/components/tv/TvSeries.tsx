import Header from "@/components/common/Header";
import React from "react";
import {MediaEntity} from "@/app/api/media/types";
import useLocalization from "@/hooks/useLocalization";
import MediaList from "@/components/common/MediaList";
import SearchInput from "@/components/home/SearchInput";

interface IProps {
    tvSeries: MediaEntity[]
}

const TvSeries: React.FC<IProps> = ({tvSeries}) => {
    const {t} = useLocalization();

    return (
        <div className={'flex flex-col gap-y-6 w-full py-10'}>
            <SearchInput />
            <Header title={`${t('tvSeries')}`} />
            <MediaList media={tvSeries} />
        </div>
    );
};

export default TvSeries;