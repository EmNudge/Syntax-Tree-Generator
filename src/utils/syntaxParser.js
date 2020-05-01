import {
  char,
  many1,
  letters,
  whitespace,
  optionalWhitespace,
  between,
  anythingExcept,
  recursiveParser,
  coroutine,
  choice,
  anyOfString
} from "arcsecond";

const sentenceParser = coroutine(function*() {
  const nonBracket = anythingExcept(anyOfString("[]"));
  const sentence = yield many1(nonBracket);
  return sentence.join("");
});

const betweenBrackets = between(char("["))(char("]"));

const endNode = betweenBrackets(
  coroutine(function*() {
    const name = yield letters;
    yield whitespace;
    const sentence = yield sentenceParser;

    return {
      name,
      sentence
    };
  })
);

const nodeOfNodes = betweenBrackets(
  coroutine(function*() {
    const name = yield letters;
    yield optionalWhitespace;

    const nodes = yield many1(
      coroutine(function*() {
        const node = yield choice([
          endNode,
          recursiveParser(() => nodeOfNodes)
        ]);
        yield optionalWhitespace;

        return node;
      })
    );

    return {
      name,
      nodes
    };
  })
);

const syntaxParser = choice([nodeOfNodes, endNode]);

export default syntaxParser;
