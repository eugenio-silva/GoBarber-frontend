/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import GlobalStyle from './styles/global';
// import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
