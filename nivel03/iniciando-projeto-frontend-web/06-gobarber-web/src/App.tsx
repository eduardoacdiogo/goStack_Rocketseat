import React from 'react';

import SingIn from './pages/signin';
// import SingUp from './pages/signup';
import GlobalStyle from './styles/global';

import ToastContainer from './components/toastContainer/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SingIn />
        {/* <SingUp /> */}
      </AuthProvider>

      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
