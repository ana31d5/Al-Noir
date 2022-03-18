
function validateInfo (values) {

    let errors = {}

    if (!values.username.trim ()) {
        errors.username = "Username required";
    }

    if(!values.email) {
        errors.email = "Email required";

    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Adress is invalid";
    }

    if (!values.Password) {
        errors.Password = "Password is required";
    } else if (values.Password.lenght<6) {
        errors.Password = "Password needs to be 6 letters or more";
    }

    if (!values.Password2) {
        errors.Password2 = "Password is required";
    } else if (values.Password.lenght !== values.Password) {
        errors.Password2 = "Passwords do not match";
    }

    return errors;

}

export default validateInfo;