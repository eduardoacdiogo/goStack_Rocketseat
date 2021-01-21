import React from 'react';

import SingIn from './pages/signin';
// import SingUp from './pages/signup';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SingIn />
        {/* <SingUp /> */}
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
