import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from './components/Layout'
import About from './components/About'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
  </Router>
  );
}

export default App;
