import logo from './logo.svg';
import './App.css';
import React, { useState, createContext } from 'react';
import Appcompo from './Appcompo';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { thunk_funtion } from './Redux/Redux';
//ay

export const UserContext = createContext();

function App() {
  const [a, setA] = useState()

  const [user, setUser] = useState('ok')


  return (

    // <UserContext.Provider value={user} >
    <Provider store={store}>
      <Appcompo />
    </Provider>

    // </UserContext.Provider>
  );
}

export default App;
