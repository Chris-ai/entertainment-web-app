import Container from "@/components/common/Container";
import Home from "@/components/home/Home";
import {fetchMedia} from "@/app/api/media/route";
import {getRecommendations, getTrending} from "@/service/media/mediaService";

export default async function Page(){
    const trending = await getTrending();
    const recommendations = await getRecommendations();

    return(
        <Container>
           <Home trending={trending} recommendations={recommendations} />
        </Container>
    )
}