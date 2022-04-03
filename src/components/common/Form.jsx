import React from 'react';
import  Joi  from 'joi-browser';
import AuthInput from './authInput';
import SelectInput from './selectInput';
import { genres } from '../../services/fakeGenreService';


class Form extends React.Component {
    state = {
        data : {},
        errors : {}
    }
    validate = () => {
        // const options = {abortEarly : false}
        const { error } = Joi.validate(this.state.data , this.schema , {abortEarly : false})
        if (!error) return null;
         
        const errorData = {};
        for (let item of error.details) errorData[item.path[0]] = item.message ;
         return errorData;
        
        
    }   
    validateProperty = ({name , value}) =>{
        const obj = {[name] : value};
        const schema = {[name] : this.schema[name]}
        const {error} = Joi.validate(obj , schema);
        return error ? error.details[0].message : null 
      
    }
    handleSubmit = e =>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors : errors || {} });
        if(errors) return;
        this.doSubmmit();
    }

    handleInputChange = ({currentTarget : input}) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input);
        // const errorMessage = null;
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data , errors});
    }
    renderButton = (label) =>{
        return <button disabled={this.validate()} className="btn btn-primary">{label}</button>
    }
    renderSelectInput(label , name , genres){
        const {data , errors} = this.state;

        return(
        <SelectInput 
        error={errors[name]}
        onChangeInput={this.handleInputChange}
        label={label} 
        name={name} 
        value={data[name]}
        options={genres}

        />)
    }

    renderInput = (label , name , type) => {
        const {data , errors} = this.state;

        return(
            <AuthInput 
            label={label} 
            name={name} 
            value={data[name]} 
            onChangeInput={this.handleInputChange} 
            error={errors[name]}
            type={type}
        />    

        );
    }
    
}
 
export default Form;