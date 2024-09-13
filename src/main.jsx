import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Item from './Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ToastContainer position='top-right' autoClose={5000} />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:id' element={<Item  age='30' />} />

      </Routes>
    </BrowserRouter>
  </>
);
