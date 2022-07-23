import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Header from '../Components/Header';
import Movie from '../Components/Movie';

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {};

  render() {
    return (
      <>
        <h3>Showing {this.state.movies.length} movies in the database</h3>
        <Header />
        <Movie />
      </>
    );
  }
}

export default Movies;
