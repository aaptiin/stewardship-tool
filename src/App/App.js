import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "pages/Homepage"
import Rulepage from "pages/Rulepage"
import Formpage from "pages/Formpage"
import Resultspage from "pages/Resultspage"

function App() {
  return (
    <BrowserRouter basename="/enterprise">
      <Switch>
        <Route path="/results/:id" component={Resultspage} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/rules" component={Rulepage} />
        <Route exact path="/app" component={Formpage} />
        {/* <Route path="/session/:id" component={FormPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
