

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import PlantelPage from "./pages/PlantelPage";
import TacticasPage from "./pages/TacticasPage";
import ContactoPage from "./pages/ContactoPage"
import FixturePage from "./pages/FixturePage"






function App() {
  return (
    <Router>
      <Header/>
      <Nav />
              
                <Switch>
                      <Route path="/" exact component = {HomePage} />
                      <Route path="/Plantel" exact component = {PlantelPage} />
                      <Route path="/Tacticas" exact component= {TacticasPage} />
                      <Route path="/Contacto" exact component={ContactoPage} />
                      <Route path="/Fixture" exact component={FixturePage} />
                </Switch>
              
        <Footer/>               
    </Router> 
          
    
  );
}

export default App;
