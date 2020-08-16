import React from 'react';
import './main.css'
import './w3.css'
import './w3-theme.css'
import Calculator from './components/calculator/Calculator';

const original = {
    item: 'test item from props',
    cals: 100,
    protein: 18,
    carbs: 3,
    fat: 1.5
}


function App() {
  return (
    <div className="w3-container w3-theme w3-myfont" style={{minHeight:'100vh'}}>
        <Calculator item={original} />
    </div>
  );
}

export default App;
