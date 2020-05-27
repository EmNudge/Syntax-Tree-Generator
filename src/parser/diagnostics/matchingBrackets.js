import { getError, getNonError, getHighlightedSnapshot } from './utils';

function checkForMatchingBrackets(text) {
  const OpeningBracketIndexes = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    if (char === '[') {
      OpeningBracketIndexes.push(i);
      continue;
    } else if (char === ']') {
      const lastCharIndex = OpeningBracketIndexes.pop();
      if (!lastCharIndex) {
        return getError(`Extra closing bracket detected at position ${i} ("${getHighlightedSnapshot(text, i)}")`);
      }
    }
  }
  
  if (!OpeningBracketIndexes.length) return getNonError();

  const index = OpeningBracketIndexes.pop();
  return getError(`Opening bracket found without closing bracket at position ${index}`);
}

export default checkForMatchingBrackets;