import React from 'react';
import Layout from './components/Layout/Layout';
import RoboBuilder from './containers/RoboBuilder/RoboBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>Robo-Builder</h1>
        <RoboBuilder />
      </Layout>
    </div>
  );
}

export default App;
