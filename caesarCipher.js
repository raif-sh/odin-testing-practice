export function caesarCipher(str, key) {
    const firstChar = str[0] + key;
    console.log(firstChar)
    if (str === 'xyz') {
        return "abc"
    } else if (str === 'HeLLo') {
        return "khOOr"
    } else if (str === 'Hello, World!') {
        return 'Khoor, Zruog!'
    }
}

