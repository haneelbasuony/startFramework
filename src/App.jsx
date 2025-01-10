import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portofolio from './components/Portofolio/Portofolio';
import Notfound from './components/Notfound/Notfound';

function App() {
  let routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/portifolio',
          element: <Portofolio></Portofolio>,
        },
        {
          path: '/contact',
          element: <Contact></Contact>,
        },
        {
          path: '/*',
          element: <Notfound></Notfound>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
