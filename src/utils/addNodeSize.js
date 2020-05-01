export default function addNodeSize(node) {
  const nameLen = getTextSize(node.name);
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
function getTextSize(str) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

  svg.appendChild(text);
  text.textContent = str;
  document.body.appendChild(svg);
  const length = text.getComputedTextLength();
  document.body.removeChild(svg);
  return Math.round(length) + 1;
}
