import React, { Component } from 'react';
import Header from '../../../../components/Header';
import Message from '../../components/Message';

class HomeView extends Component {
  render() {
    return (
      <div className="oc-page__content">
        <Header />
        <Message />
      </div>
    );
  }
}

export default HomeView;
