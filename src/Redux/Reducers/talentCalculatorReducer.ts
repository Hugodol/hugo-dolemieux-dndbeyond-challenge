import { TalentCalculatorState } from '../Store/types';
import { INITIALIZE_STATE, SELECT_TALENT, DESELECT_TALENT, TalentCalculatorActions } from '../Actions/types';

const initialState: TalentCalculatorState = {
    firstPath: [],
    secondPath: [],
    totalAvailablePoints: 6,
    pointsSpent: 0
};

export const talentCalculator = (state = initialState, action: TalentCalculatorActions): TalentCalculatorState => {
    switch (action.type) {
        case INITIALIZE_STATE:
            return action.payload
        case SELECT_TALENT:
            const updatedSelectData = selectTalent(state, action.payload.path, action.payload.index);
            return {
                ...state,
                [action.payload.path]: updatedSelectData.talents,
                pointsSpent: updatedSelectData.pointsSpent
            }
        case DESELECT_TALENT:
            const updatedDeselectData = deselectTalent(state, action.payload.path, action.payload.index);
            return {
                ...state,
                [action.payload.path]: updatedDeselectData.talents,
                pointsSpent: updatedDeselectData.pointsSpent
            }
        default:
            return state;
    }
}

const selectTalent = (state: TalentCalculatorState, path: string, talentIndex: number) => {
    const clonedTalents = JSON.parse(JSON.stringify((state as any)[path]));
    let currentSpentPoints = state.pointsSpent;

    if (clonedTalents[talentIndex].isSelectable && !clonedTalents[talentIndex].isSelected && state.pointsSpent < state.totalAvailablePoints) {
        clonedTalents[talentIndex].isSelected = true;
        clonedTalents[talentIndex].isDeselectable = true;
        currentSpentPoints += 1;
        if (clonedTalents[talentIndex + 1]) {
            clonedTalents[talentIndex + 1].isSelectable = true;
        }
        if (clonedTalents[talentIndex - 1]) {
            clonedTalents[talentIndex - 1].isDeselectable = false;
        }
    }

    return { talents: clonedTalents, pointsSpent: currentSpentPoints };
}

const deselectTalent = (state: TalentCalculatorState, path: string, talentIndex: number) => {
    const clonedTalents = JSON.parse(JSON.stringify((state as any)[path]));
    let currentSpentPoints = state.pointsSpent;

    if (clonedTalents[talentIndex].isDeselectable && clonedTalents[talentIndex].isSelected && state.pointsSpent > 0) {
        clonedTalents[talentIndex].isSelected = false;
        clonedTalents[talentIndex].isDeselectable = false;
        currentSpentPoints -= 1;
        if (clonedTalents[talentIndex + 1]) {
            clonedTalents[talentIndex + 1].isSelectable = false;
        }
        if (clonedTalents[talentIndex - 1]) {
            clonedTalents[talentIndex - 1].isDeselectable = true;
        }
    }

    return { talents: clonedTalents, pointsSpent: currentSpentPoints };
}