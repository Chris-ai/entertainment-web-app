import SearchInput from "@/components/home/SearchInput";
import TrendingSlider from "@/components/home/TrendingSlider";
import Recommendations from "@/components/home/Recommendations";
import {MediaEntity} from "@/app/api/media/types";

interface IProps {
    trending: MediaEntity[],
    recommendations: MediaEntity[]
}

const Home: React.FC<IProps> = ({trending, recommendations}) => {
    return (
        <div className={'flex flex-col gap-y-6 w-full py-10'}>
            <SearchInput/>
            <TrendingSlider/>
            <Recommendations recommendations={recommendations}/>
        </div>
    )
}

export default Home;