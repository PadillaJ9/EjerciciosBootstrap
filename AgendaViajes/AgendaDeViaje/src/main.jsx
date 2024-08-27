import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx';
import Viaje from './Viaje.jsx';
import Llista from './Llista.jsx';
import Añadir from './Add.jsx';
import ViajesComprados from './ViajesComprados.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Llista />} />
          <Route path="añadir" element={<Añadir />} />
          <Route path="viaje/:id" element={<Viaje />} />
          <Route path="viajesComprados" element={<ViajesComprados />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
