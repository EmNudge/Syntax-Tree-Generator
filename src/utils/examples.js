import { textStore } from '../stores/data'

export const examples = [
  `[S [NP This][VP [V creates][NP nice syntax trees]]]`,
  `
[S 
  [NP 
    [D The]
    [N chef]
  ]
  [VP 
    [V cooks]
    [NP 
      [D the]
      [N soup]
    ]
  ]
]
  `.trim(),

]

export function setExample(num) {
  textStore.set(examples[num]);
}