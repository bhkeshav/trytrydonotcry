import React, { Component } from 'react';
import FormFields from "../widgets/forms/formfills"
class User extends Component { 

    state={
         formData:{
             name:{
                element:"input",
                value:"",
                label: true,
                labelText: "Name",
                config:{
                    name:"name_input",
                    type:"text",
                    placeholder:"Enter Your Name"
                    },
                    validation: {
                        required: true,
                        minLen: 5
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
            },
                lastname:{
                    element:"input",
                    value:"",
                    label: true,
                    labelText: "LastName",
                    config:{
                        name:"Lastname_input",
                        type:"text",
                        placeholder:"Enter Your Lastname"                        
                    },
                    validation: {
                        required: true                        
                    },
                    valid: false,
                    touched: false,
                    validationMessage: ''
             }
         }
    }    
    updateForm=(newState)=>{
        this.setState({
            formData: newState
        })
    }
    submitForm=(event)=>{
            event.preventDefault();
            let dataToSubmit={};
            let formIsValid= true;
            for(let key in this.state.formData){
                dataToSubmit[key]=this.state.formData[key].value
            }
            
            for (let key in this.state.formData){
                  formIsValid= this.state.formData[key].valid && formIsValid
            }
            if (formIsValid){
                console.log(dataToSubmit)
            }
    }
    render(){        
        return(
           <div className="container">
               <form onSubmit={this.submitForm}>
                     <FormFields 
                        formData={this.state.formData} 
                        onblur={(newState)=>this.updateForm(newState)}
                        change={(newState)=>this.updateForm(newState)}
                     />


                   <button type="submit">Submit</button>
               </form>
           </div>
        )
    }
}

export default User;