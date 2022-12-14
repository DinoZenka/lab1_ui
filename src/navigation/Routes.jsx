import { BASIC_ROUTES } from 'constants'
import { Routes, Route } from 'react-router-dom';
import { CarsPage, PageNotFound } from 'pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={BASIC_ROUTES.HOME} element={<CarsPage />} />
      <Route path="*" element={<PageNotFound />} />
  </Routes>
)
}

export default AppRoutes;
