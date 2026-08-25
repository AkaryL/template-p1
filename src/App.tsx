import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { LoginPage } from './pages/LoginPage';
import { ResumenPage } from './pages/ResumenPage';
import { SentimientoPage } from './pages/SentimientoPage';
import { NoticiasPage } from './pages/NoticiasPage';
import { AlertasPage } from './pages/AlertasPage';
import { PerfilPage } from './pages/PerfilPage';
import { RecomendacionesPage } from './pages/RecomendacionesPage';
import { CompetenciaPage } from './pages/CompetenciaPage';
import { DEFAULT_SLUG } from './data/profiles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to={`/c/${DEFAULT_SLUG}`} replace />} />
        <Route path="/c/:slug" element={<DashboardLayout />}>
          <Route index element={<ResumenPage />} />
          <Route path="sentimiento" element={<SentimientoPage />} />
          <Route path="noticias" element={<NoticiasPage />} />
          <Route path="alertas" element={<AlertasPage />} />
          <Route path="recomendaciones" element={<RecomendacionesPage />} />
          <Route path="competencia" element={<CompetenciaPage />} />
          <Route path="perfil" element={<PerfilPage />} />
        </Route>
        <Route path="*" element={<Navigate to={`/c/${DEFAULT_SLUG}`} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
