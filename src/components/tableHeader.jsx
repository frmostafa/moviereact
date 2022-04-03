import React from 'react';

class TableHeader extends React.Component {
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if(path === sortColumn.path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
            else {
                sortColumn.path = path;
                sortColumn.order = 'asc';
            }
            this.props.onSort(sortColumn);
    };
    tableHeaderIcon = (column) =>{
        const {sortColumn} = this.props;
        if(column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>;
    }
    render() { 
    
        
        const {columns} = this.props;
        return (

            <thead>
                <tr>
                    {columns.map(col => <th className="clickable" onClick={() => this.raiseSort(col.path)} key={col.path || col.key}>
                        {col.label}
                        {this.tableHeaderIcon(col)}
                        </th>)}
                    
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;