import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './componenets/Header/Header';
import Home from './pages/Home/Home/Home';
import DetailService from './pages/DetailService/DetailService';
import Login from './pages/Login/Login';
import AddService from './pages/AddPlace/Addplace';
import Booking from './pages/Booking/Booking';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="bg-light">
      <AuthProvider>
        <Router>
          <Route>
            <Header></Header>
          </Route>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/details/:id">
              <DetailService></DetailService>
            </Route>
            <Route path="/booking/:id">
              <Booking></Booking>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
