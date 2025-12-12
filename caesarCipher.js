function caesarCipher(str, key) {
    // initialize variable to save the cipher result
    let result = '';

    // for each character in inputString
    for (let i = 0; i < str.length; i++){
        // check if character is uppercase letter
        if ((isUpperCase(str[i]))) {
            // get base code A = 65
            const baseCode = 'A'.charCodeAt(0);
            // Calculate shifted code
            const shiftedCode = (str[i].charCodeAt(0) - baseCode + key) % 26 + baseCode;
            // append shifted code to result
            result += String.fromCharCode(shiftedCode);
        } else if (isLowerCase(str[i])) {
            const baseCode = 'a'.charCodeAt(0);
            const shiftedCode = (str[i].charCodeAt(0) - baseCode + key) % 26 + baseCode;
            result += String.fromCharCode(shiftedCode);
        } else {
            result += str[i];
        }
    }

    return result;
}

function isUpperCase(char){
    return char === char.toUpperCase() && char !== char.toLowerCase();
};

function isLowerCase(char){
    return char === char.toLowerCase() && char !== char.toUpperCase();
}


export { caesarCipher };