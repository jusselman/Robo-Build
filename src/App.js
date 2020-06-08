import React from 'react';
import Layout from './components/Layout/Layout';
import RoboBuilder from './containers/RoboBuilder/RoboBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' exact component={RoboBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
