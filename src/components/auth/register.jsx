import React from 'react';
import  Joi  from 'joi-browser';
import Form from '../common/Form';



class Register extends Form {
    state = {
        data : {userName : " " , passWord : "" , name : ""},
        errors : {}
    }
    schema = {
        userName : Joi.string().required().min(3).label('UserName'),
        passWord : Joi.string().required().min(4),
        name : Joi.string().required()
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
                {this.renderInput("Password" , "passWord" , "password")}
                {this.renderInput("Name" , "name" )}
                    
                
                {this.renderButton("Register")}
            </form>        
        </div>
            
        );
    }
}
 
export default Register;