import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import LoadingPage from '../Pages/Loading';

function App() {
  return (
    <div className='text-stone-900 dark:text-slate-200 min-h-screen scroll-smooth'>
      <Router>
        <Routes>
          <Route path='/' element={<LoadingPage />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
