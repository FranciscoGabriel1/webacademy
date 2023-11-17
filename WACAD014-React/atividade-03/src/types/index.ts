export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  production_countries?: Country[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Language[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  videos?: Video[];
  images?: {
    backdrops?: Backdrop[];
  };
}

interface Genre {
  id?: number;
  name?: string;
}

interface ProductionCompany {
  id?: number;
  logo_path?: string | null;
  name?: string;
  origin_country?: string;
}

interface Country {
  iso_3166_1?: string;
  name?: string;
}

interface Language {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}

interface Video {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  published_at?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  id?: string;
}

interface Backdrop {
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string | null;
  file_path?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}