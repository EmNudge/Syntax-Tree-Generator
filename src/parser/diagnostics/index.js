import checkForExtraSymbols from './extraSymbols'
import checkForMatchingBrackets from './matchingBrackets'

export default function getDiagnostics(text) {
  const matchingErr = checkForMatchingBrackets(text);
  if (matchingErr.isError) return matchingErr.text;
  const symbolErr = checkForExtraSymbols(text);
  if (symbolErr.isError) return symbolErr.text;
  return '';
}