function validation(values){
    console.log("values",values)
    let error = {}
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    //const password_pattern = /^(?-.*\d)(?-.*[a-z])(?-.*[A-Z])[a-zA-Z0-9]{8,}$/
    //const password_pattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/

    if(values.username == ""){
        error.username = "Username should not be empty"
    }else{
        error.username =""
    }
    if(values.email == ""){
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }else {
        error.email =""
    }
    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password didn't match"
    } else {
        error.password = ""
    }
    return error;
}

export default validation;