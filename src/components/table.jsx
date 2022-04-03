import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({movies ,sortColumn , onSort ,columns}) => {

    return ( 
          <table className="table">
                    <TableHeader sortColumn={sortColumn} columns={columns} onSort={onSort} />
                    <TableBody items={movies} columns={columns} />
                   
        </table>
     );
}
 
export default Table;
