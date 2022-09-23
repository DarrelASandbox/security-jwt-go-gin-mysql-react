import './App.css';

import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer, Header } from './components';
import { HomeScreen, LoginScreen, SignupScreen } from './screens';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
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
