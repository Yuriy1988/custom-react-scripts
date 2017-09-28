import React, { Component } from 'react';
import HomeView from '../features/Home/containers/HomeView';
import './oneUiCore/core.css';

class App extends Component {
  render() {
    return (
      <div className="oc-page__frame">
        <HomeView />
      </div>
    );
  }
}

export default App;
