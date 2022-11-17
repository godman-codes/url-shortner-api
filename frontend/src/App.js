import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./container/Home";
import SignUp from "./container/SignUp";
import Login from "./container/Login";
import Dashboard from "./container/Dashboard";
import { GlobalStyle } from "./GlobalStyles";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Layout>
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<SignUp />} />
                  <Route exact path="/dashboard" element={<Dashboard />} />
               </Routes>
            </Layout>
            <GlobalStyle />
         </Router>
      </Provider>
   );
}

export default App;
