import useLocalization from "@/hooks/useLocalization";
import Header from "@/components/common/Header";
import MediaCard from "@/components/common/MediaCard";
import {MediaEntity} from "@/app/api/media/types";
interface IProps {
    media: MediaEntity[]
}
const Recommendations: React.FC<IProps> = ({media}) => {
    const {t} = useLocalization();

    return (
        <div className={'flex flex-col gap-y-6'}>
            <Header title={`${t('recommendedForYou')}`} />
            <div className={'grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
                {media.map(media =>
                    <MediaCard
                        key={`${media.title}_${media.year}_${media.category}`}
                        mediaElement={media}
                    />)}
            </div>

        </div>
    );
};


export default Recommendations;