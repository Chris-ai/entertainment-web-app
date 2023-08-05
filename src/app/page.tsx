import Container from "@/components/common/Container";
import Home from "@/components/home/Home";
import {getRecommendations, getTrending} from "@/service/media/mediaService";

export default function Page(){

    return(
        <Container>
           <Home />
        </Container>
    )
}