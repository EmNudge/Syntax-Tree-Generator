<script>
  export let node;
  export let x = 20;
  export let y = 20;
  export let depth = 0;

  import { treeDepthStore } from '../../stores/data';
  import { alignTextBottomStore } from '../../stores/preferences';
  // needs to be reactive or it won't always be reassesed with new trees.
  $: if (depth > $treeDepthStore)  $treeDepthStore = depth;

  const getTextPos = (alignBottom, treeDepth) => {
    const multiplier = alignBottom ? treeDepth - depth + 1 : 1;
    return y + 60 * multiplier;
  };

  $: textPosition = getTextPos($alignTextBottomStore, $treeDepthStore);

  let hovered = false;

  const getXPositions = () => {
    const arr = [];
    let xPos = x;
    for (const cNode of node.nodes) {
      arr.push(xPos);
      xPos += cNode.size + 20;
    }
    return arr;
  };

  $: xPositions = node.nodes ? getXPositions() : [];
</script>

{#if node.name}
  <g width={node.size} class:hovered>
    <!-- text container -->
    <g
      on:mouseover={() => hovered = true}
      on:mouseout={() => hovered = false}
    >
      {#each node.name.nameArr as { type, text, offset }}
       <text 
          x={x + node.size/2 + offset - node.nameSize/2} 
          y={type === 'name' ? y : y + 3}
          text-anchor="left"
          font-size="{type === 'name' ? 16 : 12}px">
          {text}
        </text>
      {/each}
    </g>
   

    {#if node.nodes}
      <!-- making 2 separate loops so that all lines come before nodes. -->
      <!-- Just for organization in the output -->
      {#each node.nodes as cNode, i}
        <line 
          x1={x + node.size/2} 
          y1={y + 10} 
          x2={xPositions[i] + cNode.size/2} 
          y2={y + 40} stroke="black" />
      {/each}
      {#each node.nodes as cNode, i}
        <svelte:self 
          node={cNode} 
          x={xPositions[i]} 
          y={y + 60}
          depth={depth + 1} />
      {/each}
    {:else}
      <line 
        x1={x + node.size/2} 
        y1={y + 10} 
        x2={x + node.size/2} 
        y2={textPosition - 20} 
        stroke="black" />

      <text 
        x={x + node.size/2} 
        y={textPosition}
        font="16px sans-serif"
        text-anchor="middle"
      >{node.sentence}</text>
    {/if}
  </g>
{/if}