import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './shared/components/PrivateRoute';
import PublicRoute from './shared/components/PublicRoute';

const PhonebookPage = lazy(() => import('./pages/PhonebookPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading page</p>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhonebookPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
