import {
  many1,
  coroutine,
  anyOfString,
  anythingExcept,
} from "arcsecond";

const sentenceParser = coroutine(function*() {
  const nonBracket = anythingExcept(anyOfString("[]"));
  const sentence = yield many1(nonBracket);
  return sentence.join("");
});

export default sentenceParser;