import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
  height: 175,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div>
        <div>
          <TextField hintText="" floatingLabelText="Say It, Don't Spray It!" floatingLabelFixed onChange={this.handleInput} />
        </div>
        <div>
          <div>
            <ChildComponent onClick={this.handleSubmit}/>
          </div>
          <div>
            <Paper style={style} zDepth={1}>
            <h2>State, props, children, function, fun!</h2>
            <p>Message</p>
            <DisplayComponent sayWhat={this.state.whatWasSaid} />
          </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentComponent;
