export interface Talent {
    name: string;
    description: string;
    image: string;
    path: string;
    isSelectable: boolean;
    isDeselectable: boolean;
    isSelected: boolean;
}

export interface TalentCalculatorState {
    firstPath: Talent[];
    secondPath: Talent[];
    totalAvailablePoints: number;
    pointsSpent: number;
}