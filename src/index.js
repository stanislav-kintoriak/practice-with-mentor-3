import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter basename="stanislav-kintoriak.github.io/practice-with-mentor-3/">
      <App />
    </BrowserRouter>
  </React.StrictMode> 
);

