export interface IRootInterface {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Doc {
  id: number;
  name: string;
  alternativeName?: string;
  enName?: any;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  status?: any;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  totalSeriesLength?: any;
  seriesLength?: any;
  ratingMpaa?: string;
  ageRating: number;
  poster: Poster;
  backdrop: Poster;
  genres: Genre[];
  countries: Genre[];
  top10?: any;
  top250?: number;
  isSeries: boolean;
  ticketsOnSale: boolean;
  logo?: Logo;
}

export interface Logo {
  url: string;
}

export interface Genre {
  name: string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await?: any;
}

export interface Name {
  name: string;
  language?: string;
  type?: string;
}

export interface IRootImages {
  docs: DocImg[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface DocImg {
  movieId: number;
  type: string;
  url: string;
  previewUrl: string;
  height: number;
  width: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}