import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import SearchPokemon from './components/SearchPokemon';
import './App.css'
import AppHome from './components/AppHome';

function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<AppHome/>}/>
          <Route path='searchPokemon' element={<SearchPokemon/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
 )
}

export default App