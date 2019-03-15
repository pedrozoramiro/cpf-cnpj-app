import React, { Component } from 'react';
import AppLoading from '../commons/components/AppLoading/AppLoading';
import AppNotifications from '../commons/components/AppNotifications/AppNotifications';
import IdentificationList from './Identification/IdentificationList';

class App extends Component {

  render() {
    return (
      <div>
        <AppNotifications />
        <AppLoading />
        <IdentificationList />
      </div>
    );
  }
}

export default App;
