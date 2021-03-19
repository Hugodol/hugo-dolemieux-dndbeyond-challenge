import * as React from 'react';
import { connect } from 'react-redux';

//Redux
import { selectTalent, deselectTalent } from '../../Redux/Actions/actions';
import { SelectTalentAction, DeselectTalentAction } from '../../Redux/Actions/types';

//SCSS
import './TalentIcons.scss';

interface IProps {
  key: string;
  index: number;
  lastIndex: number;
  name: string;
  imageClass: string;
  path: string;
  isSelected: boolean;


  selectTalent: (path: string, index: number) => SelectTalentAction;
  deselectTalent: (path: string, index: number) => DeselectTalentAction;
};

class TalentButton extends React.Component<IProps, {}> {
  render() {
    return (
      <>
        <button
          key={this.props.key}
          className={`talent-border ${this.props.isSelected && 'talent-border-selected'}`}
          onClick={this.handleOnClick}
          onContextMenu={this.handleOnContextMenu}
          aria-label={this.props.name}
        >
          <div className={`talent-icon talent-${this.props.imageClass} ${this.props.isSelected && 'is-selected'}`} />
        </button>
        {this.renderLinkBar()}
      </>
    );
  }

  handleOnClick = () => {
    this.props.selectTalent(this.props.path, this.props.index);
  }

  handleOnContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.deselectTalent(this.props.path, this.props.index);
  }

  renderLinkBar = () => {
    if (this.props.index < this.props.lastIndex) {
      return <div className={`talent-link-bar ${this.props.isSelected && 'talent-link-bar-selected'}`} />;
    }
  }
}

const mapDispatchToProps = {
  selectTalent,
  deselectTalent
};

export default connect(
  null,
  mapDispatchToProps
)(TalentButton);