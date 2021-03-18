import { TalentCalculatorState } from '../Store/types';

export const INITIALIZE_STATE = 'INITIALIZE_STATE';
export const SELECT_TALENT = 'SELECT_TALENT';
export const DESELECT_TALENT = 'DESELECT_TALENT';

export interface InitializeStateAction {
    type: typeof INITIALIZE_STATE;
    payload: TalentCalculatorState;
}

export interface SelectTalentAction {
    type: typeof SELECT_TALENT;
    payload: { path: string; index: number }
}

export interface DeselectTalentAction {
    type: typeof DESELECT_TALENT;
    payload: { path: string; index: number }
}

export type TalentCalculatorActions = InitializeStateAction | SelectTalentAction | DeselectTalentAction;