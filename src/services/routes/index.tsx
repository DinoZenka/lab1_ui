import {BASIC_ROUTES} from 'constants/index'
import {Router, Routes, Route} from 'react-router-dom';
import { CarsPage, HomePage, PageNotFound } from 'pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={BASIC_ROUTES.HOME} element={<HomePage />} />
      <Route path={BASIC_ROUTES.CARS} element={<CarsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes;
