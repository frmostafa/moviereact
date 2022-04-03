import React from 'react';

const AuthInput = ({name , onChangeInput , label , error , type = "text", value}) => {
    return ( 
        <div style={{textAlign : "start" }} className="mb-3 form-group">
        <label  htmlFor={name}>{label}</label>
        <input 
            id={name} 
            type="text" 
            className="form-control" 
            value={value}
            name={name}
            onChange={onChangeInput}
            type={type}
        />
        {error && <div className="alert alert-danger">
            {error}
        </div>
        }
        
    </div>
     );
}
 
export default AuthInput;