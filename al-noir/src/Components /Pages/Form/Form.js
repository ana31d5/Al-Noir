import React, { useState } from "react";
import SignUp from "./SignUp";
import FormSuccess from "./FormSuccess";

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    function submitForm () {
        setIsSubmitting(true);
    }

    return (
        <div>
            {!isSubmitted ?<SignUp submitForm={submitForm} /> : (<FormSuccess/>)}

        </div>
    )
}

export default Form;