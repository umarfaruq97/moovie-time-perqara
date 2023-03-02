import { ActionTree } from 'vuex'
import { MovieType } from './types'
import MovieEnum from './enum'
import { APIResponseType } from '~/types/fetching-api'
import {
  MovieDetailRequest,
  MovieDetailResponse,
  MovieItem,
  MovieListRequest,
} from '~/types/movie'
import { mutateHelper } from '~/utils/store'
import { movieCarouselList, movieList } from '~/utils/movie'

const actions: ActionTree<MovieType, MovieType> = {
  async getMovieList({ commit }, data: MovieListRequest) {
    try {
      const emptyState: MovieItem[] = []
      const staticState: MovieItem[] = [...movieList]
      commit(
        MovieEnum.MOVIE_LIST_MUTATE,
        mutateHelper({ statusProcess: 'FETCHING', data: emptyState })
      )
      const result: APIResponseType<MovieItem[]> = await this.$axios
        .get('/api/movie/list', { params: { ...data } })
        .then((res) => res.data)
        .catch((err) => err)
      if (result.code === 200) {
        commit(
          MovieEnum.MOVIE_LIST_MUTATE,
          mutateHelper({ statusProcess: 'SUCCESS', data: result.data })
        )
      } else {
        commit(
          MovieEnum.MOVIE_LIST_MUTATE,
          mutateHelper({ statusProcess: 'FAILED', data: staticState })
        )
      }
      return result
    } catch (error) {
      commit(
        MovieEnum.MOVIE_LIST_MUTATE,
        mutateHelper({ statusProcess: 'ERROR', data: null })
      )
      return { code: 400, message: 'catch error', data: error }
    }
  },
  async getMovieDetail({ commit }, data: MovieDetailRequest) {
    try {
      commit(
        MovieEnum.MOVIE_DETAIL_MUTATE,
        mutateHelper({ statusProcess: 'FETCHING', data: null })
      )
      const result: APIResponseType<MovieDetailResponse> = await this.$axios
        .get(`/api/movie/detail/${data.id}`)
        .then((res) => res.data)
        .catch((err) => err)
      if (result.code <= 201) {
        commit(
          MovieEnum.MOVIE_DETAIL_MUTATE,
          mutateHelper({ statusProcess: 'SUCCESS', data: result.data })
        )
      } else {
        commit(
          MovieEnum.MOVIE_DETAIL_MUTATE,
          mutateHelper({ statusProcess: 'FAILED', data: null })
        )
      }
      return result
    } catch (error) {
      commit(
        MovieEnum.MOVIE_DETAIL_MUTATE,
        mutateHelper({ statusProcess: 'ERROR', data: null })
      )
      return { code: 400, message: 'catch error', data: error }
    }
  },
  async getMovieCarouselList({ commit }) {
    try {
      const emptyState: MovieItem[] = []
      const staticState: MovieItem[] = [...movieCarouselList]
      commit(
        MovieEnum.MOVIE_CAROUSEL_LIST_MUTATE,
        mutateHelper({ statusProcess: 'FETCHING', data: emptyState })
      )
      const result: APIResponseType<MovieItem[]> = await this.$axios
        .get('/api/movie/carousel-list')
        .then((res) => res.data)
        .catch((err) => err)
      if (result.code === 200) {
        commit(
          MovieEnum.MOVIE_CAROUSEL_LIST_MUTATE,
          mutateHelper({ statusProcess: 'SUCCESS', data: result.data })
        )
      } else {
        commit(
          MovieEnum.MOVIE_CAROUSEL_LIST_MUTATE,
          mutateHelper({ statusProcess: 'FAILED', data: staticState })
        )
      }
      return result
    } catch (error) {
      commit(
        MovieEnum.MOVIE_CAROUSEL_LIST_MUTATE,
        mutateHelper({ statusProcess: 'ERROR', data: null })
      )
      return { code: 400, message: 'catch error', data: error }
    }
  },
}

export default actions
