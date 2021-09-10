import { Route, Router, Switch } from "react-router";
import CardCart from "./components/CardCart/CardCart";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
    <div className="App">
      <Header/>
      <div>
        <List/>
      </div>
    </div>
    <Switch>
      <Route path="/cart"><CardCart/></Route>
    </Switch>
  </AppProvider>
  );
}

export default App;
