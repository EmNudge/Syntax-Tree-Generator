import { textStore } from '../stores/data'

export const examples = [
  { name: 'Basic', text: `[S [NP This][VP [V creates][NP nice syntax trees]]]` },
  { 
    name: 'Indented', 
    text:  `
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
  `.trim() 
  },
  {
    name: 'Long Names',
    text: `
[S
  ["First Part" Hello]
  ["Second Part" My Friend]
]
    `.trim()
  },
  {
    name: 'Subscripts',
    text: `
[S
  [NP(1) Hello]
  ["Longer(2) Thing(3)" My Friend]
]
    `.trim()
  },
]