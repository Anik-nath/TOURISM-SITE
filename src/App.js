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

function App() {
  return (
    <div className="App">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
