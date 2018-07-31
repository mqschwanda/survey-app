import React, { PureComponent } from 'react';
import firebase, { ui as firebaseui, FirebaseAuth } from './';

export class FirebaseAuthentication extends PureComponent {
  static defaultProps = {
    // Whether to automatically upgrade existing anonymous users on
    // sign-in/sign-up. See Upgrading anonymous users. When set to true,
    // signInFailure callback is required to be provided to handle merge
    // conflicts.
    autoUpgradeAnonymousUsers: false,
    // An object of developers callbacks after specific events.
    callbacks:	{},
    // The Credential Helper to use. See Credential Helper.
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
    // The redirect URL parameter name for the sign-in success URL. See
    // Overwriting the sign-in success URL.
    queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
    // The redirect URL parameter name for the “mode” of the Widget. See
    // FirebaseUI widget modes.
    queryParameterForWidgetMode: 'mode',
    // The sign-in flow to use for IDP providers: redirect or popup.
    signInFlow: 'popup',
    // The list of providers enabled for signing into your app. The order you
    // specify them will be the order they are displayed on the sign-in provider
    // selection screen.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
    // The URL where to redirect the user after a successful sign-in. Required
    // when the signInSuccessWithAuthResult callback is not used or when it
    // returns true.
    signInSuccessUrl: '/',
    // The URL of the Terms of Service page.
    tosUrl: 'https://www.google.com/',
    // The URL of the privacy policy page.
    privacyPolicyUrl: 'https://www.google.com/',
  }

  getUiConfig = ({
    signInFlow,
    signInSuccessUrl,
    signInOptions,
    tosUrl,
    privacyPolicyUrl,
    queryParameterForWidgetMode,
  } = this.props) => ({
    signInFlow,
    signInSuccessUrl,
    signInOptions,
    tosUrl,
    privacyPolicyUrl,
    queryParameterForWidgetMode,
  })

  render() {
    return (
      <FirebaseAuth
        uiConfig={this.getUiConfig()}
        firebaseAuth={firebase.auth()}
      />
    );
  }
}

export default FirebaseAuthentication;
