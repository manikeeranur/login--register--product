import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./components/Product";
function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/product' component={Product} />
    </Router>
  );
}

export default App;
