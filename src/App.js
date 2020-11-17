import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import InfoSolicitud from "./Pages/InfoSolicitud";
import "./App.css";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/info-solicitud/:id">
            <InfoSolicitud/>
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
