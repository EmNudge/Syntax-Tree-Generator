import { getTextObject, getTextSize, getChildTextObject } from './text'

const PADDING = 20;

export default function addNodeSize(node) {
  // first lets give the name its length
  let nameLen = 0;
  // while we're calculating the total length, we replace each name node with one that contains more info
  // such as its offset and individual size
  node.nameArr = node.nameArr.map(({ text, type }, index) => {
    // add 2px of space between text nodes
    if (index !== 0) nameLen += 2;

    const fontSize = type === 'name' ? 16 : 12;
    const textSize = getTextSize(text, fontSize);
    
    const textObj = getChildTextObject(text, type, textSize, nameLen);

    nameLen += textSize;
    
    return textObj;
  })
  node.nameSize = nameLen;

  // if no children, just get the biggest text element
  if (!node.nodes) {
    const sentenceSize = getTextSize(node.sentence);
    node.sentence = getTextObject(node.sentence, "terminal", sentenceSize);

    node.size = Math.max(nameLen, sentenceSize);
    return node.size;
  }

  // loop through children and add up sizes
  let totalChildrenSize = 0;
  for (const cNode of node.nodes) {
    const cNodeSize = addNodeSize(cNode);
    totalChildrenSize += cNodeSize;
  }
  // adding the padding which gets added in the application
  totalChildrenSize += (node.nodes.length - 1) * PADDING;

  // since children and node take up 2 different rows, we compare
  node.size = Math.max(totalChildrenSize, nameLen);
  return node.size;
}