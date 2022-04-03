import React from 'react';
import _ from 'lodash';

class TableBody extends React.Component {
    cellRendering(item , column){
        if(column.content) return column.content(item);

        return  _.get(item , column.path);
    }
    createKey(item , column){
        return item._id + (column.path || column.key);
    }
    render() { 
        const {columns , items} = this.props;
        return (
            <tbody>
                {items.map(item =>
                <tr key={item._id}>
                    {columns.map(col =><td key={this.createKey(item , col)}> { this.cellRendering(item , col)}</td>) }
                </tr>)
                }
                
            </tbody>

        );
    }
}
 
export default TableBody;