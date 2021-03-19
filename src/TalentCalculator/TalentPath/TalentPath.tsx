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
      <h2 className="path-name">{props.pathName}</h2>
      <div className="talent-buttons">
        {props.talents.map((talent, index) => 
          <TalentButton
            key={`talent-${talent.path}-${index}`}
            index={index}
            lastIndex={props.talents.length - 1}
            name={talent.name}
            imageClass={talent.image}
            path={talent.path}
            isSelected={talent.isSelected}
          />
        )}
      </div>
    </div>
  );
}