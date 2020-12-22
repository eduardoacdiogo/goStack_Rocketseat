import React from 'react';

import GlobalStyle from './styles/global';
import SingIn from './pages/signin';

const App: React.FC = () => {
  return (
    <>
      <SingIn />
      <GlobalStyle />
    </>
  );
};

export default App;
