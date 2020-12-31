import { Route, Switch } from "react-router-dom";
import "./App.css";
import CapsPage from "./Pages/CapsPage";
import ShopPage from "./Pages/ShopPage";
import Homepage from "./Pages/Homepage";
import JacketsPage from "./Pages/JacketsPage";
import MensPage from "./Pages/MensPage";
import SneakersPage from "./Pages/SneakersPage";
import WomesPage from "./Pages/WomesPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route path="/caps" component={CapsPage} />
        <Route path="/mens" component={MensPage} />
        <Route path="/womens" component={WomesPage} />
      </Switch>
    </>
  );
}

export default App;
