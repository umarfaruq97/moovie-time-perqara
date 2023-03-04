import { MovieState } from './types'

const state = (): MovieState => ({
  movieList: {
    data: [],
    isLoading: false,
  },
  movieDetail: {
    data: {
      movie_id: '1',
      movie_slug: '',
      movie_title: '',
      movie_year: 0,
      movie_rating: 2.1,
      movie_thumbnail_url: '',
      movie_views: 0,
      movie_genres: [],
      movie_overview: '',
      movie_reviews: [],
      movie_votes: 0,
      movie_status: '',
      movie_language: '',
      movie_budget: '',
      movie_production: '',
      movie_cover_url: '',
      movie_release_date: '',
    },
    isLoading: false,
  },
  movieCarouselList: {
    data: [],
    isLoading: false,
  },
})

export default state
