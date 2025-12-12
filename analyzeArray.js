function analyzeArray(arr) {
    // calculate avg
    const avgComputed = arr.reduce((prev, current) => prev + current ) / arr.length;

    // calculate min & max value
    const minComputed = Math.min(...arr);
    const maxComputed = Math.max(...arr);

    return {
        average: avgComputed,
        min: minComputed,
        max: maxComputed,
        length: arr.length
    };
}

export { analyzeArray }