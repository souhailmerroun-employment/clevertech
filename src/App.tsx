import './App.css';

import { Header } from './shared/components';
import { MovieList } from './movies/components';
import { MovieProvider } from 'movies/components/MovieProvider';

function App() {
  return (
    <MovieProvider>
        <MovieList/>
    </MovieProvider>
  );
}

export default App;
