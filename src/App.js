import './public/stylesheets/App.css';
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AccessibleData from './components/AccessibleData.js'

import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <BrowserRouter basename="/data-accessibility">
      <StyledEngineProvider injectFirst>
        <div className="container">
          <Routes> 
            <Route exact path="/" element={<AccessibleData/>}/>  
          </Routes>
        </div>
      </StyledEngineProvider>
	</BrowserRouter>
  );
}

export default App;
