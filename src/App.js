import React, { useState } from 'react';
import './App.css';


function App() {
  const [fruits, setFruits] = useState(['Mango','orange','banana']);
  const [newFruits, setNewFruits] = useState('');

  const handleChange = (a) => {
    setNewFruits(a.target.value);
  };

  const addItem = () =>{
      setFruits([...fruits, newFruits]);
      setNewFruits('');
  
};
  return (
    <div className="container">
      <header className="App-header">
        <h1>Simple React List Items</h1>
      </header>
      <input 
        type = 'text'
        value = {newFruits}
        onChange = {handleChange}
        placeholder='Enter a Newfruits..'
        />
        <button onClick={addItem}>Add Fruits</button>
      <div className='list-items'>
        <ul>
          {fruits.map((fruit,index) =>(
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
