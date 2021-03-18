//Redux
import { Talent } from '../../Redux/Store/types';

//Components
import TalentButton from './TalentButton';

//SCSS
import './TalentPath.scss';

interface IProps {
  pathName: string;
  talents: Talent[];
}

export const TalentPath = (props: IProps) => {
  return (
    <div className="talent-path">
      <div className="path-name">{props.pathName}</div>
      <ul className="talent-buttons">
        {props.talents.map((talent, index) => 
          <TalentButton
            index={index}
            lastIndex={props.talents.length - 1}
            imageClass={talent.image}
            path={talent.path}
            isSelected={talent.isSelected}
          />
        )}
      </ul>
    </div>
  );
}