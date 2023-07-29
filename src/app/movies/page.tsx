import Container from "@/components/common/Container";
import Movies from "@/components/movies/Movies";
import {getMovies} from "@/service/media/mediaService";
import SearchInput from "@/components/home/SearchInput";

export default async function Page(){
    const movies = await getMovies();

    return (
        <Container>
            <div className={'flex flex-col gap-y-6 max-w-full'}>
                <SearchInput />
                <Movies movies={movies}/>
            </div>
        </Container>
    );
};
