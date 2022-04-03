import React, { Component } from 'react';
import Like from './like';
import { Link } from 'react-router-dom';
import Table from './table';

class MoviesTable extends Component {
    columns = [
        {path : 'title' , label :'Title' , content : (movie) => <Link to={`/movies/${movie._id}`} >{movie.title}</Link>},
        {path : 'genre.name' , label : 'Genre'},
        {path : 'numberInStock' , label : 'Stock'},
        {path : 'dailyRentalRate' , label : 'Rate'},
        {key : 'like' , 
            content : (movie) => 
            <Like onClick={() => this.props.onLike(movie)} movie={movie} />
    },
        {key : 'delete' ,
            content : (movie) => 
            <button onClick={() => this.props.onDelete(movie)} className="btn btn-sm btn-danger">delete</button>
    }
    ];
    render() { 
        const {sortColumn , movies , onSort} = this.props;
        return ( 
           <Table onSort={onSort} movies={movies} sortColumn={sortColumn} columns={this.columns}/>
         );

    }
}

export default MoviesTable;