import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>  
        <App />
        im bhumik
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
