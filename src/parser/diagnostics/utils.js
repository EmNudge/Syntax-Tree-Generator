export const getSnapshot = (text, i, padding = 3) => text.slice(i - padding, i + padding);
export const getHighlightedSnapshot = (text, i, padding = 3) => {
  const start = text.slice(i - padding, i);
  const end = text.slice(i + 1, i + padding);
  return `${start}**${text[i]}**${end}`;
};

export const getError = text => ({ text, isError: true });
export const getNonError = (text = '') => ({ text, isError: false });