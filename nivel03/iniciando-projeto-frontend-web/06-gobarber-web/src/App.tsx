import React from 'react';

import SingIn from './pages/signin';
// import SingUp from './pages/signup';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SingIn />
        {/* <SingUp /> */}
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
