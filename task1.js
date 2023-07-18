function getPasswordChecker(password) {
    return function check(user){
        return password == user;
    }
}


let result = getPasswordChecker('12345')
console.log(result(12345))
console.log(result(54321))