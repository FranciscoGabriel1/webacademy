export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  overview: string;
  tagline: string;
  release_date: string;
  runtime: number;
  genres?: Array<{ id?: number; name?: string }> | undefined;
  revenue: number;
  imdb_id: string;
}
