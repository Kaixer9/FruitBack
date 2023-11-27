import { createBrowserRouter } from 'react-router-dom'
import Home from "../Pages/Home.jsx";
import Root from "../Layouts/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
},
])

export default router