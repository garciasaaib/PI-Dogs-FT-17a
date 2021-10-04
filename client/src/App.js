import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import './App.css';

// views
import Create from './views/Create'
import Detail from './views/Detail'
import Home from './views/Home'
import Landing from './views/Landing'
import NotFound from './views/NotFound'
import About from './views/About'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/about" component={About} exact />
        <Route path="/create" component={Create} exact />
        <Route path="/detail/:id?" component={Detail} exact />
        <Route path="/home" component={Home} exact />
        <Route component={NotFound} exact />
      </Switch>
    </Router>
  );
}

export default App;
