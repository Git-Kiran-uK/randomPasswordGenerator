const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const firstPassword = document.getElementById('password-one');
const secondPassword = document.getElementById('password-two');

function randomPassword(length){
    let passwordOne = '';
    let passwordTwo = '';

    for(let i = 0; i < length; i++){
        passwordOne += characters[Math.floor(Math.random() * characters.length)];
        passwordTwo += characters[Math.floor(Math.random() * characters.length)];
    }

    firstPassword.textContent = passwordOne;
    secondPassword.textContent = passwordTwo;
}

document.getElementById('generate').addEventListener('click', () => {
    randomPassword(15);
});

/* Functionality need to be added */
// 1. Customize the password length
// 2. Add checkboxes to allow users to select which types of characters to include in their passwords (e.g., uppercase, lowercase, numbers, special characters).