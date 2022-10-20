function passwordChecker(password) {
    while (password.length >= 6 && password.length <= 20){
        const regex = /^(?=(?:[^a-z]*[a-z]){1})(?=(?:[^A-Z]*[A-Z]){1})(?=(?:\D*\d){1}).{6,}$/
        //(?=(?:[^!@#$%^&*)(]*[!@#$%^&*)(]){1}) for special character
        let match = regex.test(password)
        // console.log(match)
        if (match)
            return 0
        else
            return -1
            // return 'password must contain atleast ONE uppercase, lowercase and numeric value.'
    }
    return (6 - password.length)
}

function checkConsecutive(fromPassword) {
    for (let i = 0; i < fromPassword.length; i++) {
        if (fromPassword.charAt(i) === fromPassword.charAt(i+1) && fromPassword.charAt(i+1) === fromPassword.charAt(i+2))
            return true;
    }
}

let pass = 'Pass@123';
if (!checkConsecutive(pass)){
    console.log(passwordChecker(pass));
}
else {
    console.log('INVALID '+pass+': contain three repeating characters in a row')
}
