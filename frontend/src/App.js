
import './App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BusList from './components/BusList/BusList';
import SearchBus from "./components/SearchBus/SearchBus";
import Calendar from './components/Calendar/Calendar';
import AddBus from './components/Admin/AddBus/AddBus';
import TimeInterval from './components/Admin/TimeSelector/TimeSelector';


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
        path: "calendar",
        element: <Calendar />
      }
    ]
  },

  {
    path: "/admin",
    children: [
      {
        path: "", // replace it by path : "add-bus"
        index: true,
        element: <AddBus />
        // element : <TimeInterval />
      }
    ]
  }


]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
