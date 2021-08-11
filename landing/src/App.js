//import './App.css';
import FormApp from './form/FormApp';
import './form/FormStyle.css'
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";

export default function App() {
  return (    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
  );
}
