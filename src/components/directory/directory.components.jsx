import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-items/menu-items.components";
import { selectDirectorySections } from "../../redux/directory/director.selector";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};

export default connect(mapStateToProps)(Directory);
