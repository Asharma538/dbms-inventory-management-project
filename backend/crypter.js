function crypt(password) {
    let hashedPassword = ""
    for(let i=0;i<password.length;i++){
        hashedPassword += password.charCodeAt(i);
        if (i!=password.length-1) hashedPassword += '.'
    }
    return hashedPassword;
}

function decrypt(hashedPassword) {
    let password = "";
    let temp_ascii = "";
    for(let i=0;i<hashedPassword.length;i++){
        if (hashedPassword[i]=='.'){
            password += String.fromCharCode(parseInt(temp_ascii));
            temp_ascii = "";
        }
        else{
            temp_ascii += hashedPassword[i];
        }
    }
    password += String.fromCharCode(temp_ascii);
    return password;
}

module.exports = {crypt,decrypt};