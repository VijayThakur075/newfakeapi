import Registration from './component/Registration,js';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './component/Login';
import Locations from './component/Locations';
import Families from './component/Families';
import Products from './component/Products';
import Transactions from './component/Transaction';
import PrivateRouting from './component/PrivateRouting';
import PublicRouting from './component/PublicRouting';
import Dashboard from './component/DashBoard';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard />
        <Switch>
        <PublicRouting exact path="/registration" component={Registration} />
        <PublicRouting exact path="/login" component={Login} />

        <PrivateRouting exact path="/dashboard" component={Dashboard} />
        <PrivateRouting path="/products" component={Products} />
        <PrivateRouting path="/locations" component={Locations} />
        <PrivateRouting path="/families" component={Families} />
        <PrivateRouting path="/transactions" component={Transactions} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
