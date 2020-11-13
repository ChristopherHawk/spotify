import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import Routes from './routes/index';
import './App.css';
import CreateToken from './createToken';

function App() {

  if (!localStorage.getItem('tokenSpotify')) return <CreateToken />

  return (
    <Routes />
  );
}

export default App;
