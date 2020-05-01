import {
  char,
  many1,
  whitespace,
  optionalWhitespace,
  between,
  recursiveParser,
  coroutine,
  choice,
} from "arcsecond";
import sentenceParser from './sentenceParser';
import nameParser from './nameParser';

const betweenBrackets = between(char("["))(char("]"));

export const endNode = betweenBrackets(
  coroutine(function*() {
    yield optionalWhitespace;
    const name = yield nameParser;
    yield whitespace;
    const sentence = yield sentenceParser;

    return {
      name,
      sentence
    };
  })
);

export const nodeOfNodes = betweenBrackets(
  coroutine(function*() {
    yield optionalWhitespace;
    const name = yield nameParser;
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