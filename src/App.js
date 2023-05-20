import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <>
    <BrowserRouter>
      <h1>Hello React</h1>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
