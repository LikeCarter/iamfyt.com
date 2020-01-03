import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './assets/css/theme.min.css';
import './assets/fonts/Feather/feather.css';
import Footer from './components/Footer';
import Navbar from './components/Navigation';
import About from './screens/About/About';
import Pricing from './screens/Pricing/Pricing'
import Privacy from './screens/Privacy/Privacy';
import Terms from './screens/Terms/Terms';
import Home from './screens/Home/Home'

export default class App extends React.Component {
  public render = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/pricing/" component={Pricing} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy-policy" component={Privacy} />
          </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
}

