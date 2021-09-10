import { Route, Router, Switch } from "react-router";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import List from "./components/List/List";

import Header from "./components/Header/Header";
import Section from "./components/Sections/Sections"
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
    <div className="App">
      <Header/>
      <Section/>
    </div>
    
  </AppProvider>
  );
}

export default App;
