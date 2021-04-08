import { createContext, useState } from 'react';
import { Route, Router, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Header></Header>



       </div> 
    </UserContext.Provider>

  );
}

export default App;
