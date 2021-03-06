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
import AllBookings from './pages/AllBookings/AllBookings';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './componenets/Footer/Footer';
import { NotFound } from 'http-errors';
import MyBookings from './pages/MyBookings/MyBookings';
import Contact from './componenets/Contact/Contact';

function App() {
  return (
    <div className="App-header bg-light">
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
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/details/:id">
              <DetailService></DetailService>
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/allbookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
