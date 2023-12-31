import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Header from './components/Header/Header';
import Home from './components/Home/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={
                    <>
                        <Header/>
                        <Home />
                    </>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>
);
