import {MediaEntity} from "@/app/api/media/types";

export const getRecommendations = async (): Promise<MediaEntity[]> => {
    let recommendations: MediaEntity[] = [];
    try{
        const media = await fetch('/api/media').then(res => res.json())
        recommendations = media.filter((media:MediaEntity) => {
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
        const media = await fetch('/api/media').then(res => res.json())
        trending = media.filter((media: MediaEntity) => {
            if(media.thumbnail.trending){
                return media;
            }
        })
    }catch(e){
        console.error(e);
    }

    return trending;
}

export const getMovies = async (query?: string): Promise<MediaEntity[]> =>{
    let movies: MediaEntity[] = [];

    try{
        const media = await fetch('/api/media').then(res => res.json())
        movies = media.filter((media: MediaEntity) => {
            const searchParam = query ? media.title.includes(query) : true;
            if(media.category === 'Movie' && searchParam){
                return media;
            }
        })
    }catch(e) {
        console.error(e);
    }

    return movies;
}

export const getTvSeries = async (query?: string): Promise<MediaEntity[]> =>{
    let tvSeries: MediaEntity[] = [];

    try{
        const media = await fetch('/api/media').then(res => res.json())
        tvSeries = media.filter((media: MediaEntity) => {
            const searchParam = query ? media.title.includes(query) : true;
            if(media.category === 'TV Series' && searchParam){
                return media;
            }
        })
    }catch(e) {
        console.error(e);
    }

    return tvSeries;
}


export const getBookmarks = async (query?: string): Promise<MediaEntity[]> =>{
    let bookmarks: MediaEntity[] = [];

    try{
        const media = await fetch('/api/media').then(res => res.json())
        bookmarks = media.filter((media: MediaEntity) => {
            const searchParam = query ? media.title.includes(query) : true;
            if(media.isBookmarked && searchParam){
                return media;
            }
        })
    }catch(e) {
        console.error(e);
    }

    return bookmarks;
}