import React from 'react';

const ListGroup = (props) => {
    const {genreitems , textprop , valueprop , onItemSelect , selectedGenre} = props;
    return ( 
        <ul  className="list-group mt-3 clickable">
            { genreitems.map((genre) => (
                  <li onClick={() => onItemSelect(genre)} key={genre[valueprop]} className={selectedGenre === genre ? "list-group-item active" : "list-group-item"}>{genre[textprop]}</li>
            ))}
        </ul>
     );
}

ListGroup.defaultProps = {
    textprop : "name",
    valueprop : "_id"
};
 
export default ListGroup;