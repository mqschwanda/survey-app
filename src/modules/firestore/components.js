import React, { PureComponent } from 'react';
import firebase, { ui, FirebaseAuth } from './';

export class FirebaseAuthentication extends PureComponent {
  static defaultProps = {
    signInFlow: 'popup', // Popup signin flow rather than redirect flow.
    signInSuccessUrl: '/',  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      ui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
  }
  getUiConfig = (props = this.props) => {
    const { signInFlow, signInOptions, signInSuccessUrl } = props;
    return {
      signInFlow,
      signInSuccessUrl,
      signInOptions,
    };
  }

  render() {
    // console.log('FirebaseAuthentication', this.getUiConfig().signInSuccessUrl, this.props.signInSuccessUrl);
    return (
      <FirebaseAuth
        uiConfig={this.getUiConfig()}
        firebaseAuth={firebase.auth()}
        // {...this.props}
      />
    );
  }
}

export default FirebaseAuthentication;
