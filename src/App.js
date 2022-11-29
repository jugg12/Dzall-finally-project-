import Homepage from "./components/glavnaya/Homepage";
import Oshibka from "./components/glavnaya/Oshibka";
import Vhod from "./components/vhod/vhod";
import Registraciya from "./components/vhod/registraciya/registraciya";
import Otpravka from "./components/vhod/registraciya/otpravka";
import kontakti from "./components/glavnaya/kontakti";
import "./App.css";
import React from "react";
import { useTransition,animated } from "react-spring";
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import otpravka from "./components/vhod/registraciya/otpravka";
import { createBrowserHistory } from "history";


function App() {
  const CustomHistory = createBrowserHistory();
  return (
    <>
      <div className="App">
                <Switch history={CustomHistory}>
                  <Route exact path="/" component={Homepage} history={CustomHistory}/>
                  <Route exact path="/Vhod" component={Vhod} history={CustomHistory}/>
                  <Route exact path="/kontakti" component={kontakti} history={CustomHistory}/>
                  <Route exact path="/Otpravka" component={Otpravka} history={CustomHistory}/>
                  <Route exact path="/registraciya/registraciya" component={Registraciya} history={CustomHistory}/>
                  <Route exact path="*" component={Oshibka} history={CustomHistory}/>
                </Switch>         
      </div>
    </>
      
  );
}

export default App;
