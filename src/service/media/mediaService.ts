import { MediaEntity } from "@/app/api/media/types";

export const getRecommendations = async (
  query?: string
): Promise<MediaEntity[]> => {
  let recommendations: MediaEntity[] = [];
  try {
    const media = await fetch("/api/media", {
      next: { tags: ["recommendations"] },
    }).then((res) => res.json());
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
    const media = await fetch("/api/media", {
      next: { tags: ["trending"] },
    }).then((res) => res.json());
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
    const media = await fetch("/api/media", {
      next: { tags: ["movies"] },
    }).then((res) => res.json());
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
    const media = await fetch("/api/media", {
      next: { tags: ["tvSeries"] },
    }).then((res) => res.json());
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
    const media = await fetch("/api/media", {
      next: { tags: ["bookmarks"] },
    }).then((res) => res.json());
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
    const mediaResponse = await fetch("/api/media").then((res) => res.json());
    mediaResponse.map((e: MediaEntity) => {
      if (
        mediaElement.title === e.title &&
        mediaElement.category === e.category &&
        mediaElement.year === e.year
      ) {
        e.isBookmarked = !e.isBookmarked;
      }
    });

    await fetch("/api/media", {
      method: "PUT",
      body: JSON.stringify(mediaResponse),
    });
  } catch (e) {
    console.error(e);
  }
};
