import React from 'react';
import './main.css'
import './w3.css'
import './w3-theme.css'
// import Calculator from './components/calculator/Calculator';
import FakeParent from './components/FakeParent'

const original = {
    item: 'test item from props',
    cals: 100,
    protein: 18,
    carbs: 3,
    fat: 1.5
}
const foodItems = [
  {
    item: 'egg, large',
    quantity: 1,
    unit: 1,
    calories: 71,
    pgrams: 6,
    cgrams: 0,
    fgrams: 5
  },
  {
    item: 'applegate chicken and sage sausage',
    quantity: 1,
    unit: 3,
    calories: 110,
    pgrams: 9,
    cgrams: 1,
    fgrams: 8
  }
];

function App() {
  return (
    <div className="w3-container w3-theme w3-myfont" style={{minHeight:'100vh'}}>
        <FakeParent item={original} />
    </div>
  );
}

export default App;
