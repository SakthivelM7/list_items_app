import React from 'react';
import './App.css';
import ItemList from './itemlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React List Items</h1>
      </header>
      <main>
        <ItemList />
      </main>
    </div>
  );
}

export default App;
