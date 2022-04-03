import React from 'react';


const MovieForm = ({match , history}) => {
  
    return ( 
        <div>
            <h3>Id of this video is:  {match.params.id} </h3>
            <buttun onClick={() => history.push("/movies")} className="btn btn-primary btn-lg">Save</buttun>
        </div> );
     
}
 
export default MovieForm;


