import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const {itemCount , pageSize , currentPage, onPageChange} = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    if(pageCount === 1) return null;

    const pages = _.range(1 , pageCount +1 );


    return ( 
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => 
                <li key={page} className={ currentPage === page ? 'page-item active' : 'page-item' }>
                    <span onClick={() => onPageChange(page)} className="page-link clickable" >{page}
                    </span>
                    </li>
                    )}
            </ul>
        </nav>
     );
}
 
export default Pagination;