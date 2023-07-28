import {fetchMedia} from "@/app/api/media/route";

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
                return trending;
            }
        })
    }catch(e){
        console.error(e);
    }

    return trending;
}