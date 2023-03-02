import { GetterTree } from 'vuex'
import { MovieType } from './types'

const getters: GetterTree<MovieType, MovieType> = {
  movieList: (state) => state.movieList,
  movieDetail: (state) => state.movieDetail,
  movieCarouselList: (state) => state.movieCarouselList,
}

export default getters
