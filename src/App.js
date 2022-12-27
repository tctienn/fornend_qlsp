import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, createContext } from 'react';
import Appcompo from './Appcompo';

export const UserContext = createContext();

function App() {
  const [a, setA] = useState()

  const [user, setUser] = useState('ok')

  return (

    <UserContext.Provider value={user} >
      <Appcompo />
    </UserContext.Provider>
  );
}

export default App;
