import React, { useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { Movie, MoviesAction } from 'types';
import { getMovies } from 'api/movies';

interface MoviesState {
  movies: Movie[]
  initialized: boolean
}

export function useMoviesCollection(): [MoviesState, React.Dispatch<MoviesAction>] {
  // TODO: Implement all action processing

  const movieReducer = (state: MoviesState, action: MoviesAction): MoviesState => {
    switch (action.type) {
      case 'fetch':
        return { movies: action.payload.data, initialized: true };

      case 'add':
        const movie = action.payload.movie;
        const moviesWithNew = [...state.movies, { ...movie, id: uuid(), ratings: [] }];
        return { movies: moviesWithNew, initialized: true };

      case 'delete':
        const moviesWithoutDeleted = state.movies.filter(movie => movie.id !== action.payload.movieId);
        return { movies: moviesWithoutDeleted, initialized: true };

      case 'rate':
        const updatedRatingsMovie = state.movies.map(movie => {
          if (movie.id === action.payload.movieId) {
            return {...movie, ratings: [...movie.ratings, action.payload.rating]};
          }
        
          return movie;
        });
         
        return { movies: updatedRatingsMovie, initialized: true };
        
      default:
        return state
    }
  };

  const [state, dispatch] = useReducer(movieReducer, {
    movies: [],
    initialized: false,
  });

  useEffect(() => {
    getMovies().then(data => {
      dispatch({ type: "fetch", payload: { data: data } });
    });
  }, []);

  return [state, dispatch];
}
