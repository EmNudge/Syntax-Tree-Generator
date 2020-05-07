export function getTextObject(text, type = 'text', size = 0) {
  return { text, type, size }
}

// these are children of an array of text elements. They belong to one main parent node
export function getChildTextObject(text, type = 'text', size, offset) {
  return { text, type, size, offset };
}

export function getTextSize(str, fontSize = 16, fontFamily = 'sans-serif') {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute('font-size', `${fontSize}px`);
  text.setAttribute('font-family', fontFamily);

  svg.appendChild(text);
  text.textContent = str;
  document.body.appendChild(svg);
  const length = text.getComputedTextLength();
  document.body.removeChild(svg);
  return Math.round(length) + 1;
}
