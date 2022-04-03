import React from 'react';
import {getMovies } from '../services/fakeMovieService'
import {getGenres} from '../services/fakeGenreService'
import MoviesTable from './moviesTable';
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import ListGroup from './listGroup';
import _ from 'lodash';

class Movie extends React.Component {
    state = {
        movies : [],
        genres : [],
        pageSize : 4,
        currentPage : 1,
        selectedGenre : null,
        sortColumn : {path : 'title', order : 'asc'}
    };
    componentDidMount(){
        const genres = [{_id : '' ,name : 'All Movies'} , ...getGenres()];
        this.setState({ movies : getMovies() , genres });
    };
    handleMovieDelete = movie => {
        const movies = this.state.movies.filter(mov => mov._id !== movie._id);
      
        this.setState({movies})
    };
    handleToggleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].isLike = !movies[index].isLike;
        this.setState({movies});
    };
    handlePageChange = (page) => {
        this.setState({currentPage : page});
    };
    handleGenreChange = (genre) => {
        this.setState({selectedGenre : genre , currentPage : 1});
    };
    handleSorting = (sortColumn) => {
       
        this.setState({sortColumn})
    }
    getPagedData = () => {
        const { sortColumn , currentPage , pageSize , movies : allMovies , genres , selectedGenre} = this.state;
        const filtred = selectedGenre && selectedGenre._id ? allMovies.filter(mov => mov.genre._id === selectedGenre._id) : allMovies;

       

        const sorted = _.orderBy(filtred , [sortColumn.path] , [sortColumn.order]);

        const movies = paginate(sorted , currentPage , pageSize);
        return {totalCounts : filtred.length , data : movies}
    }
    render() { 
        const {totalCounts , data : movies} = this.getPagedData()
        const { sortColumn , currentPage , pageSize , movies : allMovies , genres , selectedGenre} = this.state;


        if(totalCounts === 0){
            return <p>hich filmi dar kar nis! </p>;
        };

        return (
        <div className="row">

            <div className="col-3">
                <ListGroup genreitems={genres} selectedGenre={selectedGenre} onItemSelect={this.handleGenreChange} />
            </div>
            <div className="col">

            <p>inja {totalCounts} film vojoud dare</p>
            <button onClick={() => this.props.history.push("/movies/new")} className="btn btn-primary">New Movie</button>
            <MoviesTable sortColumn={sortColumn} onSort={this.handleSorting} onLike={this.handleToggleLike} onDelete={this.handleMovieDelete} movies={movies}/>
            
        <Pagination onPageChange={this.handlePageChange} currentPage={currentPage} itemCount={totalCounts} pageSize={pageSize}/>
                
            </div>

        </div>);
    }
}
 
export default Movie;
