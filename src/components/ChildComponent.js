import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <FlatButton label="Submit" onClick={this.props.onClick} primary />
        </div>
      </div>
    );
  }
}

export default ChildComponent;
