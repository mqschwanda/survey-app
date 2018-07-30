import React, { Component } from 'react';

import firebase, { ui, FirebaseAuth } from '../../../modules/firestore';
import { Main } from '../../Layouts';

class Authentication extends Component {
  static defaultProps = {
    signInSuccessUrl: '/',  // Redirect to / after sign in is successful.
  }
  handleConfig = () => {
    const { signInSuccessUrl } = this.props
    return { // Configure FirebaseUI.
      signInFlow: 'popup', // Popup signin flow rather than redirect flow.
      signInSuccessUrl, // Alternatively you can provide a callbacks.signInSuccess function.
      signInOptions: [ // We will display Google and Facebook as auth providers.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        ui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ]
    };
  }

  render() {
    return (
      <Main>
        <FirebaseAuth
          uiConfig={this.handleConfig()}
          firebaseAuth={firebase.auth()}
        />
      </Main>
    );
  }
}

export default Authentication;
