import * as React from 'react';
import { connect } from 'react-redux';

//Redux
import { initializeState } from '../Redux/Actions/actions';
import { InitializeStateAction } from '../Redux/Actions/types';
import { TalentCalculatorState, Talent } from '../Redux/Store/types';

//Components
import { TalentPath } from './TalentPath/TalentPath';
import { PointsDisplay } from './PointsDisplay/PointsDisplay';

//SCSS
import './TalentCalculator.scss';

//Data
import { fakeUserData } from '../fakeData';

interface IProps {
  firstPathTalents: Talent[];
  secondPathTalents: Talent[];
  totalAvailablePoints: number;
  pointsSpent: number;

  initializeState: (state: TalentCalculatorState) => InitializeStateAction;
}

class TalentCalculator extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    props.initializeState(fakeUserData);
  }

  render() {
    return (
      <div className="talent-calculator-container">
        <h1 className="talent-calculator-title">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
        <div className="main-content">
          <div className="talent-path-container">
            <TalentPath pathName={'TALENT PATH 1'} talents={this.props.firstPathTalents} />
            <TalentPath pathName={'TALENT PATH 2'} talents={this.props.secondPathTalents} />
          </div>
          <PointsDisplay totalPoints={this.props.totalAvailablePoints} pointsSpent={this.props.pointsSpent} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: TalentCalculatorState) => ({
  firstPathTalents: state.firstPath,
  secondPathTalents: state.secondPath,
  totalAvailablePoints: state.totalAvailablePoints,
  pointsSpent: state.pointsSpent
});

const mapDispatchToProps = {
  initializeState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TalentCalculator);