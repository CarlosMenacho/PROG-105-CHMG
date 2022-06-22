let nameAccount = document.querySelector(".input-text");
let showpwd = document.querySelector(".data");
let table = document.getElementById("pwdTable");

let gen = document.getElementById('1').onclick = generateBtn;
let saving = document.getElementById('2').onclick = saveData;

var data = []
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
        console.log("User exists");
        return false;
    }
    else{
        data.push({
            Name: str,
            Password: genPassword(16)
        });
        return true;        
    }
}

function generateBtn(){
    let inputText = nameAccount.value
    let proc = createUser(inputText)
    if (proc){
        showpwd.innerHTML = "Your new password: " + data[data.length-1]["Password"];
        document.getElementById("2").style.visibility = "visible";
    }
    else{
        showpwd.innerHTML = "User exists! Please, enter annocer account"
        let erasedName = givenName.pop()
        console.log(nameAccount.value);
    }
}

function saveData(){
    let row = table.insertRow(data.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = data[data.length-1]["Name"]
    cell2.innerHTML = data[data.length-1]["Password"]
    navigator.clipboard.writeText(data[data.length-1]["Password"]);
    alert("Copied password!")
    document.getElementById("2").style.visibility = "hidden";
}

