import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./hocs/Layout";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./container/Home";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Layout>
               <Routes>
                  <Route exact path="/" element={<Home />} />
               </Routes>
            </Layout>
         </Router>
      </Provider>
   );
}

export default App;
