import { SELECT_TALENT, SelectTalentAction, INITIALIZE_STATE, InitializeStateAction, DESELECT_TALENT, DeselectTalentAction } from './types';
import { TalentCalculatorState } from '../Store/types';

export const initializeState = (initialsState: TalentCalculatorState): InitializeStateAction => ({
    type: INITIALIZE_STATE,
    payload: initialsState
});

export const selectTalent = (path: string, index: number): SelectTalentAction => ({
    type: SELECT_TALENT,
    payload: { path, index }
});

export const deselectTalent = (path: string, index: number): DeselectTalentAction => ({
    type: DESELECT_TALENT,
    payload: { path, index }
});