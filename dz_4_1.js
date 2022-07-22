function getPasswordChecker(pass) {
    let password = pass;
    return function validate (userpass) {
        if (password == userpass) {
            return true;
        } else {
            return false;
        }
    }
}


const pas1 = getPasswordChecker(12345);

console.log(pas1(333));

console.log(pas1(12345));


