import React, { Component } from "react";

import MenuItem from "../menu-item/MenuItem";
import data from "./directoryData";

import "./directory.scss";

export class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: data
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
