import Container from "@/components/common/Container";
import {getTvSeries} from "@/service/media/mediaService";
import TvSeries from "@/components/tv/TvSeries";

export default async function Page(){
    const tvSeries = await getTvSeries();
    return(
        <Container>
                <TvSeries tvSeries={tvSeries}/>
        </Container>
    )
}