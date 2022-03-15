import './App.css';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider, Authenticator, Button, Flex } from '@aws-amplify/ui-react';


import awsExports from './aws-exports';
Amplify.configure(awsExports);

function SignOutButton() {

  return (
    <AmplifyProvider>
    <Authenticator>
      {({ signOut, user }) => (
        <div>
        <Button onClick={signOut}
        >Sign out</Button>
        </div>
      )}
    </Authenticator>
    </AmplifyProvider>
  );
}

export default SignOutButton;
