import React from 'react';

const Like = (props) => {
    let iconClass = 'clickable fa fa-heart';
    const {movie} = props;

    return ( 
        
     <i  onClick={props.onClick} className={movie.isLike === true ? iconClass : iconClass + '-o'} aria-hidden="true"></i>
        
     );
};
 
export default Like;

