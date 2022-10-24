import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { API_BASE_URL } from './api';
import LoginPage from './pages/LoginPage';

const App = () => {
  console.log(API_BASE_URL);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/auth/login' />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;