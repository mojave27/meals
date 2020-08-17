import React from 'react';
import './main.css'
import './w3.css'
import './w3-theme.css'
import MainContainer from './components/MainContainer'


function App() {
  return (
    <div className="w3-container w3-theme w3-myfont" style={{minHeight:'100vh'}}>
        <MainContainer />
    </div>
  );
}

export default App;
