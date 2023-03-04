import { SorterType } from '~/types/components'
import { MovieDetailRequest, MovieItem, MovieListRequest } from '~/types/movie'

const movieList: MovieItem[] = [
  {
    movie_id: '1',
    movie_slug: 'wonder-woman-1984',
    movie_title: 'Wonder Woman 1984',
    movie_year: 2020,
    movie_rating: 7.0,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '1-wonder-woman.png',
    movie_views: 12400,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '2',
    movie_slug: 'below-zero',
    movie_title: 'Below Zero',
    movie_year: 2021,
    movie_rating: 6.4,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '2-below-zero.png',
    movie_views: 5000,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '3',
    movie_slug: 'the-little-things',
    movie_title: 'The Little Things',
    movie_year: 2021,
    movie_rating: 6.3,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '3-the-little-things.png',
    movie_views: 100,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '4',
    movie_slug: 'outside-wire',
    movie_title: 'Outside Wire',
    movie_year: 2021,
    movie_rating: 6.5,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '4-outside-wire.png',
    movie_views: 4000,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '5',
    movie_slug: 'black-water-abyss',
    movie_title: 'Black Water: Abyss',
    movie_year: 2020,
    movie_rating: 5.1,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '5-black-water.png',
    movie_views: 1070,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '6',
    movie_slug: 'breach',
    movie_title: 'Breach',
    movie_year: 2021,
    movie_rating: 4.6,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '6-breach.png',
    movie_views: 4500,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '7',
    movie_slug: 'soul',
    movie_title: 'Soul',
    movie_year: 2020,
    movie_rating: 8.3,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '7-soul.png',
    movie_views: 8766,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '8',
    movie_slug: 'fast-furious-presents-hobbs-shaw',
    movie_title: 'Fast & Furious Presents: Hobbs & Shaw',
    movie_year: 2019,
    movie_rating: 6.9,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '8-fast-furious.png',
    movie_views: 450120,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '9',
    movie_slug: 'the-croods-a-new-age',
    movie_title: 'The Croods: A New Age',
    movie_year: 2020,
    movie_rating: 7.6,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '9-the-croods.png',
    movie_views: 45600,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '10',
    movie_slug: 'vanguard',
    movie_title: 'Vanguard',
    movie_year: 2020,
    movie_rating: 6.3,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '10-vanguard.png',
    movie_views: 31200,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '11',
    movie_slug: 'tenet',
    movie_title: 'Tenet',
    movie_year: 2020,
    movie_rating: 7.3,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '11-tenet.png',
    movie_views: 5660,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
  {
    movie_id: '12',
    movie_slug: '100%-wolf',
    movie_title: '100% Wolf',
    movie_year: 2020,
    movie_rating: 5.9,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '12-wolf.png',
    movie_views: 1990,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
]

const movieCarouselList: MovieItem[] = [
  {
    movie_id: '1',
    movie_slug: 'space-sweepers',
    movie_title: 'Space Sweepers',
    movie_year: 2021,
    movie_rating: 7.3,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '1-carousel-space-sweepers.png',
    movie_views: 12400,
    movie_genres: ['Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview: `When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.`,
  },
  {
    movie_id: '2',
    movie_slug: 'to-all-the-boys-always-and-forever',
    movie_title: 'To All the Boys: Always and Forever',
    movie_year: 2021,
    movie_rating: 8.1,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '2-carousel-to-all.png',
    movie_views: 12400,
    movie_genres: ['Drama'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview: `Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter.`,
  },
  {
    movie_id: '3',
    movie_slug: 'news-of-the-world',
    movie_title: 'News of the World',
    movie_year: 2021,
    movie_rating: 7.2,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '3-carousel-news-of.png',
    movie_views: 12400,
    movie_genres: ['Drama'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview: `A Texan traveling across the wild West bringing the news of the world to local townspeople, agrees to help rescue a young girl who was kidnapped.`,
  },
  {
    movie_id: '4',
    movie_slug: '100%-wolf',
    movie_title: '100% Wolf',
    movie_year: 2020,
    movie_rating: 5.9,
    movie_cover_url: '1-cover-wonder-woman.png',
    movie_thumbnail_url: '12-wolf.png',
    movie_views: 1990,
    movie_genres: ['Action', 'Sci-Fi'],

    movie_reviews: [
      {
        review_id: '1',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'SWITCH',
        review_rating: 7.0,
        review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
      },
      {
        review_id: '2',
        review_date: 'December 18, 2020',
        review_image: 'user-avatar.jpg',
        review_name: 'msbreviews',
        review_rating: 8.0,
        review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
      },
    ],
    movie_votes: 3621,
    movie_status: 'Released',
    movie_language: 'English',
    movie_budget: '$200,000,000.00',
    movie_production: 'DC Entertainment',
    movie_overview:
      'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
  },
]

const categories: string[] = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
]
const sortingDropdownData: SorterType[] = [
  {
    id: '1',
    sort_by: 'movie_views',
    sort_name: 'Views',
    order_by: 'asc',
    title: 'Popularity Ascending',
  },
  {
    id: '2',
    sort_by: 'movie_views',
    sort_name: 'Views',
    order_by: 'desc',
    title: 'Popularity Descending',
  },
  {
    id: '3',
    sort_by: 'movie_release_date',
    sort_name: 'Release Date',
    order_by: 'asc',
    title: 'Release Date Ascending',
  },
  {
    id: '4',
    sort_by: 'movie_release_date',
    sort_name: 'Release Date',
    order_by: 'desc',
    title: 'Release Date Descending',
  },
  {
    id: '5',
    sort_by: 'movie_rating',
    sort_name: 'Rating',
    order_by: 'asc',
    title: 'Rating Ascending',
  },
  {
    id: '6',
    sort_by: 'movie_rating',
    sort_name: 'Rating',
    order_by: 'desc',
    title: 'Rating Descending',
  },
]
const staticFilterMovieList = (data: MovieListRequest): MovieItem[] => {
  let staticState: MovieItem[] = [...movieList]
  if (data.search) {
    staticState = staticState.filter((el: MovieItem) =>
      el.movie_title.includes(data.search)
    )
  }
  if (data.sort_by) {
    if (data.order_by === 'desc') {
      staticState = staticState.sort((a: MovieItem, b: MovieItem) =>
        b[data.sort_by as keyof MovieItem] > a[data.sort_by as keyof MovieItem]
          ? 1
          : -1
      )
    } else {
      staticState = staticState.sort((a: MovieItem, b: MovieItem) =>
        a[data.sort_by as keyof MovieItem] > b[data.sort_by as keyof MovieItem]
          ? 1
          : -1
      )
    }
  }
  if (staticState.length > data.pagination.limit) {
    const start: number = (data.pagination.page - 1) * data.pagination.limit
    const end: number = start + data.pagination.limit
    return staticState.slice(start, end)
  }
  return staticState
}
const staticFilterMovieDetail = (data: MovieDetailRequest): MovieItem => {
  const staticState: MovieItem[] = [...movieList]
  const detail: MovieItem | undefined = staticState.find(
    (el: MovieItem) => el.movie_slug === data.slug
  )
  if (detail) {
    return detail
  } else {
    return {
      movie_id: '',
      movie_slug: '',
      movie_title: '',
      movie_year: 0,
      movie_rating: 2.1,
      movie_thumbnail_url: '',
      movie_views: 0,
      movie_genres: [],
      movie_overview: '',
      movie_reviews: [
        {
          review_id: '1',
          review_date: 'December 18, 2020',
          review_image: 'user-avatar.jpg',
          review_name: 'SWITCH',
          review_rating: 7.0,
          review_explanation: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.`,
        },
        {
          review_id: '2',
          review_date: 'December 18, 2020',
          review_image: 'user-avatar.jpg',
          review_name: 'msbreviews',
          review_rating: 8.0,
          review_explanation: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
  The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only `,
        },
      ],
      movie_votes: 3621,
      movie_status: 'Released',
      movie_language: 'English',
      movie_budget: '$200,000,000.00',
      movie_production: 'DC Entertainment',
      movie_cover_url: '',
    }
  }
}
export {
  movieList,
  movieCarouselList,
  categories,
  staticFilterMovieList,
  staticFilterMovieDetail,
  sortingDropdownData,
}
