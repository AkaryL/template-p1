import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { LoginPage } from './pages/LoginPage';
import { ResumenPage } from './pages/ResumenPage';
import { SentimientoPage } from './pages/SentimientoPage';
import { NoticiasPage } from './pages/NoticiasPage';
import { AlertasPage } from './pages/AlertasPage';
import { PerfilPage } from './pages/PerfilPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<ResumenPage />} />
          <Route path="/sentimiento" element={<SentimientoPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/alertas" element={<AlertasPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
