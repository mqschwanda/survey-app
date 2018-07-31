import React, { PureComponent } from 'react';
import { FirebaseAuthentication } from '../../../modules/firestore/components';
// import firebase, { ui, FirebaseAuth } from '../../../modules/firestore';
import get from '../../../modules/get';
import { Main } from '../../Layouts';

const getRouterSignInSuccessUrl = (props) =>
  get(['location', 'state', 'signInSuccessUrl'])(props);

class Authentication extends PureComponent {
  getSignInSuccessUrl = (props = this.props) =>
    get(['location', 'state', 'signInSuccessUrl'])(props) ||
    props.signInSuccessUrl

  render() {
    // console.log('Authentication', this.getSignInSuccessUrl());
    return (
      <Main>
        <FirebaseAuthentication signInSuccessUrl={this.getSignInSuccessUrl()} />
      </Main>
    );
  }
}

// class Authentication extends PureComponent {
//   static defaultProps = {
//     signInFlow: 'popup', // Popup signin flow rather than redirect flow.
//     signInSuccessUrl: '/',  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//       ui.auth.AnonymousAuthProvider.PROVIDER_ID,
//     ],
//   }
//   getUiConfig = ({ signInFlow, signInOptions } = this.props) => ({
//     signInFlow,
//     signInSuccessUrl: this.getSignInSuccessUrl(),
//     signInOptions,
//   })
//
//   getSignInSuccessUrl = (props = this.props) =>
//     getRouterSignInSuccessUrl(props) || props.signInSuccessUrl
//
//   render() {
//     return (
//       <Main>
//         <FirebaseAuth
//           uiConfig={this.getUiConfig()}
//           firebaseAuth={firebase.auth()}
//         />
//       </Main>
//     );
//   }
// }

export default Authentication;
