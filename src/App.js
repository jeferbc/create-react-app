import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from './components/Layout'
import About from './containers/About'
import NeonatalFluidCalculator from './containers/NeonatalFluidCalculator';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/liquidos-neonatos" component={NeonatalFluidCalculator} />
        </Switch>
      </Layout>
  </Router>
  );
}

export default App;
