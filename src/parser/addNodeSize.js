export default function addNodeSize(node) {
  // first lets give the name its length
  let nameLen = 0;
  for (const [index, name] of node.name.nameArr.entries()) {
    if (index !== 0) nameLen += 2;
    name.offset = nameLen;
    nameLen += getTextSize(name.text, name.type === 'name' ? 16 : 12);
  }
  node.nameSize = nameLen;

  // if no children, just get the biggest text element
  if (!node.nodes) {
    node.size = Math.max(nameLen, getTextSize(node.sentence));
    return node.size;
  }

  // loop through children and add up sizes
  let totalChildrenSize = 0;
  for (const cNode of node.nodes) {
    const cNodeSize = addNodeSize(cNode);
    totalChildrenSize += cNodeSize;
  }
  // since children and node take up 2 different rows, we compare
  node.size = Math.max(totalChildrenSize, nameLen);
  return node.size;
}

// adds to SVG to get text size
function getTextSize(str, fontSize = 16) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute('font-size', `${fontSize}px`);

  svg.appendChild(text);
  text.textContent = str;
  document.body.appendChild(svg);
  const length = text.getComputedTextLength();
  document.body.removeChild(svg);
  return Math.round(length) + 1;
}
