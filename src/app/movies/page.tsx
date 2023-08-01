import Container from "@/components/common/Container";
import Movies from "@/components/movies/Movies";
import {getMovies} from "@/service/media/mediaService";

export default async function Page(){
    const movies = await getMovies();

    return (
        <Container>
                <Movies movies={movies}/>
        </Container>
    );
};
