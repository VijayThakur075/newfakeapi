import  Registration  from './component/registration';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './component/login';
import Locations from './component/locations';
import Families from './component/families';
import Products from './component/products';
import Transactions from './component/transactions';
import dashboard from './component/dashboard';

function App() {
  return (
    <div className="App">
    <Router>
      <Link to= "/registration">login</Link>

      <Route exact path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={dashboard}/>
      <Route path="/products" component={Products}/>
      <Route  path="/locations" component={Locations}/>
      <Route path="/families" component={Families}/>     
      <Route path="/transactions" component={Transactions} />
    </Router>
    </div>
  );
}

export default App;
