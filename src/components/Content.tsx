import { MovieCard } from "./MovieCard";
import '../styles/content.scss';

import { MovieProps } from "../App"

interface ContentProps {
  titleGender: string;
  movies: MovieProps[];
}

export function Content(props: ContentProps) {
  const { titleGender, movies } = props

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {titleGender}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}