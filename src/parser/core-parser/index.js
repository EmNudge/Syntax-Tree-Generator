import { choice } from 'arcsecond';
import { nodeOfNodes, endNode } from './nodeParser';

const syntaxParser = choice([nodeOfNodes, endNode]);

export default syntaxParser;
