import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Home from "./Components/pages/Home/Home";
import Tours from "./Components/pages/Tours/Tours";
import NotFound from "./Components/pages/NotFound/NotFound";
import About from "./Components/pages/About/About";
import Contact from "./Components/pages/Contact/Contact";
import Registration from "./Components/Form/Registration/Registration";
import Login from "./Components/Form/Login/Login";
import Booking from "./Components/pages/Booking/Booking";
import Footer from "./Components/Footer/Footer";
import Destination from "./Components/pages/Destination/Destination";
import Authprovider from "./Components/Context.js/Authprovider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Authprovider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tours">
            <Tours></Tours>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <PrivateRoute path="/booking/:bookingId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
