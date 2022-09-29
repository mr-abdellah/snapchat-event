import Homepage from "./pages/Homepage";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from './pages/Create';
import Event from './pages/Event';
import { useState } from 'react';


function App() {
  const [event, setEvent] = useState({
    name: "Abdellah",
    hostName: "hostName",
    start: "2022-09-29T13:23",
    end: "2022-09-29T13:23",
    location: "Algeria",
  });
  const [photo, setPhoto] = useState()

  const handleFileUpload = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  }

  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/create",
      element: (
        <Create
          event={event}
          handleChange={handleChange}
          handleFileUpload={handleFileUpload}
        />
      ),
    },
    {
      path: "/event",
      element: (
        <Event event={event} handleChange={handleChange} photo={photo} />
      ),
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
