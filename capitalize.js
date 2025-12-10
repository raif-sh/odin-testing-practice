// function takes a string and returns it with the first character capitalized
function capitalize(string) {
    const firstChar = string.charAt(0);
    const rest = string.slice(1);
    return firstChar.toUpperCase() + rest;
}

export { capitalize }