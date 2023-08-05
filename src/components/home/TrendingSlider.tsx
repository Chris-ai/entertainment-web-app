import {MediaEntity} from "@/app/api/media/types";
import MediaCard from "@/components/common/media/MediaCard";
import Header from "@/components/common/Header";

interface IProps {
    trending: MediaEntity[],
    title: string
}

const TrendingSlider: React.FC<IProps> = ({trending, title}) => {

    return (
        <>
            <Header title={title} />
            <div className={'w-full grid grid-flow-col gap-x-4 md:gap-x-[40px] overflow-x-auto overscroll-x-contain hide-scrollbar'}>
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