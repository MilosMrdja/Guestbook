import React from 'react';
import './css/App.css';
import WelcomePage from './pages/WelcomePage';
import { Routes, Route } from 'react-router-dom';
import MessagePage from './pages/MessagePage';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<WelcomePage/>}></Route>
        <Route path='/leave-message' element={<MessagePage/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
