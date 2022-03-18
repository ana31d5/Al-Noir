import { toHaveErrorMessage, toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import './Form.css';


const SignUp = ({submitForm}) => {

    const { handleChange, values, handleSubmit, errors} = useForm(validateInfo,submitForm);



    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>

            <h1>
                Get started with us today! <br/>
                Create your account by filling out the information below.
            </h1>


             
                <div className="form-inputs">
                <label htmlFor="username" className="form-label"> Username </label>
                    <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Enter your Username"
                    value={values.username}
                    onChange={handleChange}
                    
                    />

                    {errors.username && <p>{errors.username}</p>}

                 </div>
               
                 

                   
                <div className="form-inputs">
                <label htmlFor="email" className="form-label"> Email </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your Email"
                    value={values.email}
                    onChange={handleChange}
                    
                    />
                
                {errors.email && <p>{errors.email}</p>}

                 </div>

                 <div className="form-inputs">
                 <label htmlFor="Password" className="form-label"> Password </label>
                    <input
                    id="Password"
                    type="Password"
                    name="Password"
                    className="form-input"
                    placeholder="Enter your Password"
                    value={values.Password}
                    onChange={handleChange}
                    
                    />
                
                {errors.Password && <p>{errors.Password}</p>}

                 </div>

                 <div className="form-inputs">
                 <label htmlFor="Password2" className="form-label"> Confirm Password </label>
                    <input
                    id="Password2"
                    type="Password"
                    name="Password2"
                    className="form-input"
                    placeholder="Confirm Password"
                    value={values.Password2}
                    onChange={handleChange}
                    
                    />
                
                {errors.Password2 && <p>{errors.Password2}</p>}

                 </div>

                 <button className="form-input-btn"
                 type="submit"
                 >
                     Sign Up

                 </button>

                 <span className="form-input-login">
                     Already have an account ? Login <a href="Signin"> Here </a>


                 </span>



            </form>
    
        </div>

        
    )
    
    
    
    }
    
    export default SignUp;