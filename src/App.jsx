import './App.css';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Recetas from './pages/Recetas';
import PuntosDeVenta from './pages/PuntosDeVenta';
import Blog from './pages/Blog';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/tienda',
        element: <Tienda />,
      },
      {
        path: '/recetas',
        element: <Recetas />,
      },
      {
        path: '/puntosdeventa',
        element: <PuntosDeVenta />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
