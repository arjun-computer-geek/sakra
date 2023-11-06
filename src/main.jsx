import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProivider, AuthContext } from "./Contexts/AuthContext";
import { ProductProvider, ProductContext } from "./Contexts/ProductContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProivider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthProivider>
    </Router>
  </React.StrictMode>,
)
