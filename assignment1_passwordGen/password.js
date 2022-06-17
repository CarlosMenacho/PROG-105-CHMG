var data = [];
var givenName = [];

function genPassword(size){
let length = size,
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
pass = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
return pass;
}

function checkDupplicates(arr) {
    return new Set(arr).size !== arr.length;
}

function createUser(str){
    givenName.push(str);
    if(checkDupplicates(givenName)){
       console.log("User exists") 
    }
    else{
        data.push({
            Name: str,
            Password: genPassword(16)
        });
        
    }
}

createUser("Google")
createUser("Microsoft")
createUser("Google")
createUser("Google")  
console.log(data)

console.log(data[0]["Name"])
console.log(genPassword(16))