import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import '../styles/App.css';
import BaseLayout from './BaseLayout';
import ParentComponent from './ParentComponent';

// injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <BaseLayout>
            <ParentComponent />
          </BaseLayout>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
