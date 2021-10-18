import './App.css';
import React from 'react';
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import Filter from './components/ServiceFilter';

function App() {
  return (
    <div className="App">
      <Filter />
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
