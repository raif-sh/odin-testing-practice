// export function reverseString(str) {
//     const lastIndex = str.length - 1;
//     let reversedStr = '';

//     for (let i = lastIndex; i >= 0; i--) {
//         reversedStr += str[i];
//     }

//     return reversedStr;
// }

// export function reverseString(str) {
//   return [...str].reverse().join("");
// }

export function reverseString(str) {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    // Intl.Segmenter with granularity 'grapheme' correctly groups emoji + modifiers
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    const graphemes = [...segmenter.segment(str)].map(s => s.segment);
    return graphemes.reverse().join('');
  }

  // Fallback: Array.from splits by code points (better than UTF-16 units) but
  // may still split certain combined graphemes (rare). Intl.Segmenter is preferred.
  return Array.from(str).reverse().join('');
}