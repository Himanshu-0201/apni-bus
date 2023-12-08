
import './App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusList from './components/BusList/BusList';
import SearchBus from "./components/SearchBus/SearchBus";
import Calendar from './components/Calendar/Calendar';
import AddBus from './components/Admin/AddBus/AddBus';
import BusRoute from './components/BusRoute/BusRoute';
import { busStationLoader } from './components/Dropdown/Dropdown';


const router = createBrowserRouter([

  {
    path: "/",
    children: [
      {
        path: "",
        loader :  busStationLoader,
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
