import React from 'react';
import './App.scss';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Title from './components/layout/Title';
import Pokemonlist from './components/layout/Pokemonlist';

function App() {
  return (
    <div className="App">
      <header className="App-header header">
        <Header />
      </header>
      <section className="main">
        <section className="content">
        <Navbar />
        <Title />
        <Pokemonlist />
        </section>
      </section>
    </div>
  );
}

export default App;
