import React from 'react';
import  Joi  from 'joi-browser';
import Form from './common/Form';
import {getGenres} from '../services/fakeGenreService'
import { getMovie, saveMovie } from '../services/fakeMovieService';



class NewMovie extends Form {
    state = {
    data : {_id : "" ,title : "" , genreId : "" , stock : "" , rate:""},
    errors : {},
    // selecteGenre : "Action",
    geners : [],
    errors : {}
    }
    mapToViewModel = (movie) =>{
        return{
        _id : movie._id,
        title : movie.title , 
        genreId : movie.genre._id , 
        stock : movie.numberInStock , 
        rate : movie.dailyRentalRate
        }
    }
    componentDidMount = ()=>{
        const geners = [...getGenres()];
        this.setState({geners});

        const movieId = this.props.match.params.id;
        if(movieId==="new")return;

        const movie = getMovie(movieId)
        this.setState({data : this.mapToViewModel(movie)})
        console.log(movie)
    }
   
    schema = {
        _id : Joi.required(),
        title : Joi.required(),
        genreId : Joi.required(),
        stock : Joi.required(),
        rate : Joi.required()
    }
    doSubmmit = ( ) => {
        saveMovie(this.state.movie);
        this.props.history.push('/movies');
        console.log("server submitted");

    }
    render() { 
        return (
        <div style={{textAlign : "start" }} className="container">
            {this.renderInput('Title' , 'title')}
            {this.renderSelectInput('Genre' , 'genreId' , this.state.geners)}
            {this.renderInput('Stock' , 'stock')}
            {this.renderInput('Rate' , 'rate')}
            {this.renderButton('Add Movie')}
        </div>
            );
    }
}
 
export default NewMovie;