import { createStore } from 'redux';
import { talentCalculator } from '../Reducers/talentCalculatorReducer';

export const store = createStore(talentCalculator);