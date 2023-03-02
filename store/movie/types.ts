import { APIStateType } from '~/types/fetching-api'
import { MovieDetailResponse, MovieItem } from '~/types/movie'

export interface MovieState {
  movieList: APIStateType<MovieItem[]>
  movieDetail: APIStateType<MovieDetailResponse>
  movieCarouselList: APIStateType<MovieItem[]>
}

export type MovieType = ReturnType<() => MovieState>
