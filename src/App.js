import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Table from './Pages/Table/Table';
import Entry from './Pages/Entry/Entry';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/">
          <Entry />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
