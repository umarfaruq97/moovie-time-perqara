import { APIStateType } from '~/types/fetching-api'
import { MovieItem } from '~/types/movie'

export interface MovieState {
  movieList: APIStateType<MovieItem[]>
  movieDetail: APIStateType<MovieItem>
  movieCarouselList: APIStateType<MovieItem[]>
}

export type MovieType = ReturnType<() => MovieState>
