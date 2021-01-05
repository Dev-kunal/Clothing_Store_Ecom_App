import { Route, Switch } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import CapsPage from "./Pages/CapsPage";
import ShopPage from "./Pages/ShopPage";
import Homepage from "./Pages/Homepage";
import JacketsPage from "./Pages/JacketsPage";
import MensPage from "./Pages/MensPage";
import SneakersPage from "./Pages/SneakersPage";
import WomesPage from "./Pages/WomesPage";
import Header from "./Components/Header";
import SigninSignup from "./Pages/SigninSignup";
import ContactPage from "./Pages/ContactPage";
import { auth } from "./Firebase/Firebase.util";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribeUser = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user.email);
    });
    return () => {
      unsubscribeUser();
    }
  }, []);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route path="/caps" component={CapsPage} />
        <Route path="/mens" component={MensPage} />
        <Route path="/womens" component={WomesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/signin" component={SigninSignup} />
      </Switch>
    </>
  );
}

export default App;
