import React from 'react';

const SelectInput = ({error , name , onChangeInput , label , options }) => {
    return ( 
        <div className="mb-3 form-group">
            <label  htmlFor={name}>{label}</label>
            <select 
            id={name}
            className="mb-3 form-select"
            onChange={onChangeInput}
            
            
            >
                <option value=""></option>
                {options.map(option => (
                    
                    <option  key={option._id} value={option._id}>{option.name}</option>
                    
                ))}
                
            </select>
            {error && <div className="alert alert-danger">
            {error}
            </div>
        }
        </div>
     );
}
 
export default SelectInput;