interface Media {
    title: string;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

export interface Recommendation {
    media: Media,
}

export interface Trending {
    media: Media,
}