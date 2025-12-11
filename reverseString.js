export function reverseString(str) {
    const lastIndex = str.length - 1;
    let reversedStr = '';

    for (let i = lastIndex; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}