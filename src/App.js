import React from 'react';
import './main.css'
import './w3.css'
import './w3-theme.css'
import FakeParent from './components/FakeParent'

const foodItems = [
  {
    id: 0,
    percent: 1,
    item: 'egg, large',
    cals: 71,
    protein: 6,
    carbs: 0,
    fat: 5
  },
  {
    id: 1,
    percent: 1,
    item: 'applegate chicken and sage sausage',
    cals: 110,
    protein: 9,
    carbs: 1,
    fat: 8
  }
];

function App() {
  return (
    <div className="w3-container w3-theme w3-myfont" style={{minHeight:'100vh'}}>
        <FakeParent items={foodItems} />
    </div>
  );
}

export default App;
