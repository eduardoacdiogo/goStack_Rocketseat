import React from 'react';

// import SingIn from './pages/signin';
import SingUp from './pages/signup';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      {/* <SingIn /> */}
      <SingUp />
      <GlobalStyle />
    </>
  );
};

export default App;
