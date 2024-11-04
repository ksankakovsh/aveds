import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Main} from './pages/Main/Main';
import {Profile} from './pages/Profile/Profile';
import {Contacts} from './pages/Contacts/Contacts';
import { User } from './interfaces/user';

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
      <Routes>
        <Route path="/" element={<Main setUser={setUser} />} />
        <Route path="/contacts" element={<Contacts  setUser={setUser} />} />
        <Route path="/profile" element={user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/" />} />
      </Routes>
  );
}

export default App;
