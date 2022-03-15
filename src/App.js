import './App.css';
import MyServicesPage from './MyServicesPage'
import { BrowserRouter,Route,Routes} from 'react-router-dom';


import { Amplify, API, graphqlOperation } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyProvider, Authenticator, Button, Flex } from '@aws-amplify/ui-react';


import awsExports from './aws-exports';
import PersonalLoansPage from './PersonalLoansPage';
import ApplyForLoanPage from './ApplyForLoanPage';
import CurrentLoansPage from './CurrentLoansPage';
import EditLoanPage from './EditLoanPage';
import DeleteLoanPage from './DeleteLoanPage';
Amplify.configure(awsExports);

function App() {

  return (
    <AmplifyProvider>
    <Authenticator top="50%">
      {({ signOut, user }) => (
    <main>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path ="/" element={<MyServicesPage/>}></Route>
        <Route exact path ="/personal" element={<PersonalLoansPage/>}/>
        <Route exact path ="/applynow" element={<ApplyForLoanPage/>}/>
        <Route exact path ="/currentpersonal" element={<CurrentLoansPage/>}/>
        <Route exact path="/edit/:id" element={<EditLoanPage/>} />
        <Route path="/delete/:id" element={<DeleteLoanPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>

    </main>
    )}
    </Authenticator>
    </AmplifyProvider>
  );
}

export default App;
