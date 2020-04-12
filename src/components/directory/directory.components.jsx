import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-items/menu-items.components";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-menu">
      {this.state.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Directory);
