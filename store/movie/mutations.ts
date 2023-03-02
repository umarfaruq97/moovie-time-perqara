import { MutationTree } from 'vuex'
import { MovieType } from './types'
import MovieEnum from './enum'
import { APIStateType } from '~/types/fetching-api'
import { MovieDetailResponse, MovieItem } from '~/types/movie'

const mutations: MutationTree<MovieType> = {
  [MovieEnum.MOVIE_LIST_MUTATE]: (
    state: MovieType,
    data: APIStateType<MovieItem[]>
  ) => (state.movieList = data),
  [MovieEnum.MOVIE_DETAIL_MUTATE]: (
    state: MovieType,
    data: APIStateType<MovieDetailResponse>
  ) => (state.movieDetail = data),
  [MovieEnum.MOVIE_CAROUSEL_LIST_MUTATE]: (
    state: MovieType,
    data: APIStateType<MovieItem[]>
  ) => (state.movieCarouselList = data),
}

export default mutations
