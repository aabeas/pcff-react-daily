import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Footer extends Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarSeparator />
          <ToolbarTitle text="I am the Footer" />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Footer;
