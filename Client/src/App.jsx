import React from 'react'
import { Route,Routes } from 'react-router'
import HomePage from '../src/Pages/HomePage.jsx';
import CreatePage from '../src/Pages/CreatePage.jsx';
import NotesDetailsPage from '../src/Pages/NotesDetailsPage.jsx';


const App = () => {
  return (
    <div data-theme="corporate">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreatePage/>} />
        <Route path='/note/:id' element={<NotesDetailsPage/>} />
      </Routes>
    </div>
  )
}

export default App