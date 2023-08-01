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

export const getTvSeries = async (): Promise<MediaEntity[]> =>{
    let tvSeries: MediaEntity[] = [];

    try{
        const media: MediaEntity[] = await fetchMedia();
        tvSeries = media.filter((media: MediaEntity) => {
            if(media.category === 'TV Series'){
                return media;
            }
        })
    }catch(e) {
        console.error(e);
    }

    return tvSeries;
}


export const getBookmarks = async (): Promise<MediaEntity[]> =>{
    let bookmarks: MediaEntity[] = [];

    try{
        const media: MediaEntity[] = await fetchMedia();
        bookmarks = media.filter((media: MediaEntity) => {
            if(media.isBookmarked){
                return media;
            }
        })
    }catch(e) {
        console.error(e);
    }

    return bookmarks;
}