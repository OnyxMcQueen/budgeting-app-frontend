import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Nav from './components/nav';
import Home from './components/home';
import Transactions from './components/transactions';
import Transaction from './components/transaction';
import EditTransaction from './components/editTransaction';
import NewTransaction from './components/newTransaction';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/transactions' element={<Transactions />}/>
        <Route path='/transactions/new' element={<NewTransaction />} />
        <Route path='/transactions/:id/edit' element={<EditTransaction />} />
        <Route path='/transactions/:id' element={<Transaction />}/>
      </Routes>
    </Router>
  );
}

export default App;
