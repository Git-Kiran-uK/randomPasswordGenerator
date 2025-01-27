const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","^","&","*"];

function randomPassword(length, type){
    let passwordOne = '';
    let passwordTwo = '';
    const regExp = new RegExp(`[${type}]`);
    console.log(regExp);

    const filteredChar = characters.filter(char => regExp.test(char));
    console.log(filteredChar);

    for(let i = 0; i < length; i++){
        passwordOne += filteredChar[Math.floor(Math.random() * filteredChar.length)];
        passwordTwo += filteredChar[Math.floor(Math.random() * filteredChar.length)];
    }

    return [passwordOne, passwordTwo];
}

export default randomPassword;