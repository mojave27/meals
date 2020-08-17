import React from 'react';
import './main.css'
import './w3.css'
import './w3-theme.css'
import FakeParent from './components/FakeParent'


function App() {
  return (
    <div className="w3-container w3-theme w3-myfont" style={{minHeight:'100vh'}}>
        <FakeParent />
    </div>
  );
}

export default App;
