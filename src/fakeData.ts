const stacks = {
  name: 'Stacks',
  description: 'Description of talent',
  image: 'stacks',
  path: 'firstPath',
  isSelectable: true,
  isDeselectable: false,
  isSelected: false
};

const ustensiles = {
  name: 'Ustensiles',
  description: 'Description of talent',
  image: 'ustensiles',
  path: 'firstPath',
  isSelectable: false,
  isDeselectable: false,
  isSelected: false
};

const cake = {
  name: 'Cake',
  description: 'Description of talent',
  image: 'cake',
  path: 'firstPath',
  isSelectable: false,
  isDeselectable: false,
  isSelected: false
};

const crown = {
  name: 'Crown',
  description: 'Description of talent',
  image: 'crown',
  path: 'firstPath',
  isSelectable: false,
  isDeselectable: false,
  isSelected: false
};

const ship = {
  name: 'Ship',
  description: 'Description of talent',
  image: 'ship',
  path: 'secondPath',
  isSelectable: true,
  isDeselectable: false,
  isSelected: false
};

const scuba = {
  name: 'Scuba',
  description: 'Description of talent',
  image: 'scuba',
  path: 'secondPath',
  isSelectable: false,
  isDeselectable: false,
  isSelected: false
};

const lightning = {
  name: 'Lightning',
  description: 'Description of talent',
  image: 'lightning',
  path: 'secondPath',
  isSelectable: false,
  isDeselectable: false,
  isSelected: false
};

const skull = {
  name: 'Skull',
  description: 'Description of talent',
  image: 'skull',
  path: 'secondPath',
  isSelectable: false,
  isDeselectable: false,
  isSelected: false
};

export const fakeUserData = {
  firstPath: [ stacks, ustensiles, cake, crown ],
  secondPath: [ ship, scuba, lightning, skull ],
  totalAvailablePoints: 6,
  pointsSpent: 0
};