import React from "react";
import ReactDOM from "React-don/client";
import{BrowserRouter} from "react-dom"
import App from './App.jsx';
import{ Authprovider } from' ./context/Authcontext.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById("root")).render(
<React.strictmode>
    <BrowserRouter>
    <AuthProvider>
        <App/>
        </AuthProvider>
    </BrowserRouter>
    </React.strictmode>
    )
    