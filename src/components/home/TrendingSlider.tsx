import {MediaEntity} from "@/app/api/media/types";
import MediaCard from "@/components/common/MediaCard";
import Header from "@/components/common/Header";
import useLocalization from "@/hooks/useLocalization";

interface IProps {
    trending: MediaEntity[]
}

const TrendingSlider: React.FC<IProps> = ({trending}) => {
    const {t} = useLocalization();

    return (
        <>
            <Header title={t('trending')} />
            <div className={'w-full'}>
                {trending.map(mediaEntity =>
                    <MediaCard
                        key={`${mediaEntity.title}_${mediaEntity.year}_${mediaEntity.category}`}
                        mediaElement={mediaEntity}
                        variant={'large'}/>)}
            </div>
        </>

    );
};

export default TrendingSlider;