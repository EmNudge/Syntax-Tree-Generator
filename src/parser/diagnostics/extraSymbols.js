import { getError, getNonError, getSnapshot } from './utils';

function checkForExtraSymbols(text) {
  let foundClosingBracket = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === ']') {
      foundClosingBracket = true;
      continue;
    } else if (char === '[') {
      foundClosingBracket = false;
      continue;
    }

    if (char.trim().length && foundClosingBracket) {
      const snapshot = getSnapshot(text, i);
      return getError(`Found unexpected symbol "${char}" at position ${i} ("${snapshot}")`)
    }
  }
  return getNonError();
}
export default checkForExtraSymbols;