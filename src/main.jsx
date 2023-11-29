import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProivider } from "./Contexts/AuthContext";
import { ProductProvider } from "./Contexts/ProductContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProivider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProivider>
  </Router>,
)
