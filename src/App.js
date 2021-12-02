import  Registration  from './component/registration';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './component/login';

function App() {
  return (
    <div className="App">
    <Router>
      <Link to= "/registration">login</Link>

      <Route exact path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      
    </Router>
    </div>
  );
}

export default App;
