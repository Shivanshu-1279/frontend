import Campaign from "./Components/Campaign";
// import Sidebar from "./Components/sidebar/Sidebar";
import NewCamp from './Components/NewCamp'
import Product from './Components/Product'
import Setting from './Components/Setting'
import Ready from './Components/Ready'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Campaign} />
        <Route path="/newCamp" component={NewCamp} />
        <Route path="/chooseProd" component={Product} />
        <Route path="/campSetting" component={Setting} />
        <Route path="/ready" component={Ready} />

      </Switch>
    </Router>
  );
};

export default App;