import Homepage from "./pages/Homepage";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from './pages/Create';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/event",
    element: <div> event page</div>,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
