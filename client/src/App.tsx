import './App.css';

import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer, Header } from './components';
import { HomeScreen, LoginScreen, SignupScreen } from './screens';

function App() {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      const data = await res.json();
      setFirstName(data.first_name);
    })();
  }, []);

  return (
    <BrowserRouter>
      <Header firstName={firstName} setFirstName={setFirstName} />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen firstName={firstName} />} />
            <Route path="/register" element={<SignupScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
