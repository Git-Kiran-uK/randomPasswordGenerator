const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const firstPassword = document.getElementById('password-one');
const secondPassword = document.getElementById('password-two');
const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("sliderValue");

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

slider.oninput = function() {
    sliderValue.style.display = 'inline-block';
    sliderValue.innerHTML = this.value;

    const percent = (this.value - this.min) / (this.max - this.min);
    const valuePosition = percent * (this.offsetWidth - 25);

    sliderValue.style.left = valuePosition + "px";
};

document.getElementById('generate').addEventListener('click', () => {
    randomPassword(15);
    sliderValue.style.display = 'none';
});

/* Functionality need to be added */
// 2. Add checkboxes to allow users to select which types of characters to include in their passwords (e.g., uppercase, lowercase, numbers, special characters).