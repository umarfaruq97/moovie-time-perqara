export interface MovieReview {
  review_id: string
  review_name: string
  review_rating: number
  review_date: string
  review_explanation: string
  review_image: string
}
export interface MovieItem {
  movie_id: string
  movie_slug: string
  movie_title: string
  movie_year: number
  movie_rating: number
  movie_cover_url: string
  movie_thumbnail_url: string
  movie_views: number
  movie_genres: string[]
  movie_overview: string
  movie_reviews: MovieReview[]
  movie_votes: number
  movie_status: string
  movie_language: string
  movie_budget: string
  movie_production: string
  movie_release_date: string
}

export interface MovieListRequest {
  search: string
  genres?: string[]
  sort_by: string
  order_by: 'asc' | 'desc'
  pagination: {
    page: number
    limit: number
  }
}

export interface MovieDetailRequest {
  slug: string
  id?: string
}
