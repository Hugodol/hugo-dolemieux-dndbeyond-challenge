//SCSS
import './PointsDisplay.scss';

interface IProps {
  totalPoints: number;
  pointsSpent: number;
}

export const PointsDisplay = (props: IProps) => {
  return (
    <div className="points-container">
      <div>{props.pointsSpent} / {props.totalPoints}</div>
      <div className="points-spent">Points Spent</div>
    </div>
  );
}