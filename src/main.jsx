import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import renderHorizont from './utils/horizont';

renderHorizont();

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
