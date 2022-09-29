import Homepage from "./pages/Homepage";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/create",
    element: <div> create page</div>,
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
