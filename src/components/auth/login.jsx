import React from 'react';
import  Joi  from 'joi-browser';
import AuthInput from '../common/authInput';
import Form from '../common/Form';

class Login extends Form {
    state = {
        data : {userName : "" , password : ""},
        errors : {}
    }
    schema = {
        userName : Joi.string().required().min(3).label('UserName'),
        password : Joi.string().required().label('Password')
    }
    
    doSubmmit = ( ) => {
        console.log("server submitted");

    }
    
  
    render() { 
        const {data , errors } = this.state;
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit} >
                {this.renderInput("UserName" , "userName")}
                {this.renderInput("PAssword" , "password" , "password")}
                    
                
                {this.renderButton("Login")}
            </form>        
        </div>
            );
    }
}
 
export default Login;