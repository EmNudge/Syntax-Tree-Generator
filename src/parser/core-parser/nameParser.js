import {
  char,
  many1,
  many,
  between,
  coroutine,
  choice,
  anyOfString,
  digit,
  letter,
  possibly,
} from "arcsecond";

const validNameParser = many1(choice([letter, digit, anyOfString(':-')])).map(name => name.join(''));

// this should only be used when inside quotes or spaces to avoid it consuming spaces it shouldn't
const nameAndSpace = many1(choice([validNameParser, char(' ')])).map(text => text.join(''));

const quoteNameParser = nameAndSpace.map(text => ({ type: 'name', text }));

const betweenParens = between(char('('))(char(')'));
const subscriptParser = betweenParens(nameAndSpace).map(text => ({ type: 'subscript', text }));

const inOneQuotes = parser => coroutine(function*() {
  const startQuote = yield anyOfString(`"'`);
  const result = yield parser;
  yield char(startQuote);
  return result;
});

const nameInQuotes = inOneQuotes(many(choice([subscriptParser, quoteNameParser])));
const noQuoteNameParser = validNameParser.map(text => ({ type: 'name', text }));
const nameOutOfQuotes = many(choice([subscriptParser, noQuoteNameParser]))

const idParser = possibly(coroutine(function*() {
  yield char('_')
  const text = yield many1(choice([digit, letter]));
  return text.join('');
}));

const nameParser = coroutine(function*() {
  const nameArr = yield choice([nameInQuotes, nameOutOfQuotes]);
  const id = yield idParser;
  return { nameArr, id }
})

export default nameParser;