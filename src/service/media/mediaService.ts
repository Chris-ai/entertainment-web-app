import {fetchMedia} from "@/app/api/media/route";
import {MediaEntity} from "@/app/api/media/types";

export const getRecommendations = async (): Promise<MediaEntity[]> => {
    let recommendations: MediaEntity[] = [];
    try{
        const media: MediaEntity[] = await fetchMedia();
        recommendations = media.filter((media) => {
            if(!media.thumbnail.trending){
                return media;
            }
        })
    }catch(e){
        console.error(e);
    }

    return recommendations;
}

export const getTrending = async (): Promise<MediaEntity[]> => {
    let trending: MediaEntity[] = [];
    try{
        const media: MediaEntity[] = await fetchMedia();
        trending = media.filter((media) => {
            if(media.thumbnail.trending){
                return media;
            }
        })
    }catch(e){
        console.error(e);
    }

    return trending;
}

export const getMovies = async (): Promise<MediaEntity[]> =>{
    let movies: MediaEntity[] = [];

    try{
        const media: MediaEntity[] = await fetchMedia();
        movies = media.filter((media: MediaEntity) => {
            if(media.category === 'Movie'){
                return media;
            }
        })
    }catch(e) {
        console.error(e);
    }

    return movies;
}