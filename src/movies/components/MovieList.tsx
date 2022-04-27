import React, { useState } from 'react';

import { MovieCard } from './MovieCard';
import { AddMovieButton } from './AddMovieButton';
import { AddMovieForm } from './AddMovieForm';
import { Card } from 'shared/components';

import { useMovies } from './MovieProvider';

type NewMovieMode = "BUTTON" | "FORM"

export const MovieList = () => {
  const { movies, moviesDispatch } = useMovies();
  const [displayOptionType, setDisplayOptionType] = useState<NewMovieMode>('BUTTON');

  // TODO: Display list of movies 
  return (
    <div className="card-deck">
      {movies.map(movie => (
        <Card key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </Card>      
      ))}
      <Card>
        {/* TODO: Implement displaying appropriate card for add movie - button or form */}
        {/* TODO: use AddMovieButton and AddMovieForm */}
        {displayOptionType === "BUTTON" ? <AddMovieButton onClick={() => setDisplayOptionType("FORM")}/> : null}
        {displayOptionType === "FORM" ? <AddMovieForm onSubmit={({imageUrl, title, description, subtitle}) => {
          const movie = {title: title, subtitle: subtitle, description: description, imageUrl: imageUrl, ratings: [] };
          moviesDispatch({type: "add", payload: { movie: movie }})
          setDisplayOptionType("BUTTON");
        }} onCancel={() => setDisplayOptionType("BUTTON")} /> : null}
      </Card>
    </div>
  );
}
