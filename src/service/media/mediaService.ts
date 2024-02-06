import { MediaEntity } from "@/app/api/media/types";

export const getRecommendations = async (
  query?: string
): Promise<MediaEntity[]> => {
  let recommendations: MediaEntity[] = [];
  try {
    const response = await fetch("/api/media", {
      next: { tags: ["recommendations"] },
    });
    const { media } = await response.json();
    recommendations = media.filter((media: MediaEntity) => {
      const searchParam = query
        ? media.title.toLowerCase().includes(query.toLowerCase())
        : true;
      if (!media.thumbnail.trending && searchParam) {
        return media;
      }
    });
  } catch (e) {
    console.error(e);
  }

  return recommendations;
};

export const getTrending = async (query?: string): Promise<MediaEntity[]> => {
  let trending: MediaEntity[] = [];
  try {
    const response = await fetch("/api/media", {
      next: { tags: ["recommendations"] },
    });
    const { media } = await response.json();
    trending = media.filter((media: MediaEntity) => {
      const searchParam = query
        ? media.title.toLowerCase().includes(query.toLowerCase())
        : true;
      if (media.thumbnail.trending && searchParam) {
        return media;
      }
    });
  } catch (e) {
    console.error(e);
  }

  return trending;
};

export const getMovies = async (query?: string): Promise<MediaEntity[]> => {
  let movies: MediaEntity[] = [];

  try {
    const response = await fetch("/api/media", {
      next: { tags: ["recommendations"] },
    });
    const { media } = await response.json();
    movies = media.filter((media: MediaEntity) => {
      const searchParam = query
        ? media.title.toLowerCase().includes(query.toLowerCase())
        : true;
      if (media.category === "Movie" && searchParam) {
        return media;
      }
    });
  } catch (e) {
    console.error(e);
  }

  return movies;
};

export const getTvSeries = async (query?: string): Promise<MediaEntity[]> => {
  let tvSeries: MediaEntity[] = [];

  try {
    const response = await fetch("/api/media", {
      next: { tags: ["recommendations"] },
    });
    const { media } = await response.json();
    tvSeries = media.filter((media: MediaEntity) => {
      const searchParam = query
        ? media.title.toLowerCase().includes(query.toLowerCase())
        : true;
      if (media.category === "TV Series" && searchParam) {
        return media;
      }
    });
  } catch (e) {
    console.error(e);
  }

  return tvSeries;
};

export const getBookmarks = async (query?: string): Promise<MediaEntity[]> => {
  let bookmarks: MediaEntity[] = [];

  try {
    const response = await fetch("/api/media", {
      next: { tags: ["recommendations"] },
    });
    const { media } = await response.json();

    bookmarks = media.filter((media: MediaEntity) => {
      const searchParam = query
        ? media.title.toLowerCase().includes(query.toLowerCase())
        : true;
      if (media.isBookmarked && searchParam) {
        return media;
      }
    });
  } catch (e) {
    console.error(e);
  }

  return bookmarks;
};

export const bookmarkMedia = async (
  mediaElement: MediaEntity
): Promise<void> => {
  try {
    const response = await fetch("/api/media", {
      method: "PUT",
      body: JSON.stringify(mediaElement),
    });
    const { media, status } = await response.json();
    if (status === 200) {
      return media;
    }

    console.error("Something went wrong :(");
  } catch (e) {
    console.error(e);
  }
};
