import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

export default function Authorization() {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <fieldset>
            <input 
                name="firstName" 
                type="text" 
                placeholder="Your Name" 
                ref={register({ 
                        required: true, 
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Entered value does not match name format"
                        }
                    }
                )} />

                {
                    errors.firstName ? <p className="invalid">{errors.firstName && "Your field is required"}</p> : null
                }

            <input 
                name="email"
                placeholder="Your Email"
                ref={register({
                    required: "required",
                    pattern: {
                        // value: /S+@S+.S+/,
                        message: "Entered value does not match email format"
                    }
                })}
                type="email" />
            {
                errors.email ? <p className="invalid">{errors.email && "Your field is required"}</p> : null
            }
            
            <input type="submit" />
        </fieldset>
      </form>
    );
}
