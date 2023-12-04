
import './App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusList from './components/BusList/BusList';
import SearchBus from "./components/SearchBus/SearchBus";
import Calendar from './components/Calendar/Calendar';
import AddBus from './components/Admin/AddBus/AddBus';
import BusRoute from './components/BusRoute/BusRoute';


const router = createBrowserRouter([

  {
    path: "/",
    children: [
      {
        path: "",
        element: <SearchBus />,
      },
      {
        path: "bus-list",
        element: <BusList />

      },
      {
        path : "bus-route/:busId",
        element : <BusRoute />
      },
      {
        path: "calendar",
        element: <Calendar />
      }
    ]
  },
  {
    path: "/admin",
    children: [
      {
        path: "", 
        index: true,
        element: <AddBus />
      }
    ]
  },

]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
