

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Form from "./components/Form/Form";
// import BusList from "./components/BusResults/BusList/BusList";
// import RecentDeparture from "./components/FormPopUp/FormPopUp";
import './App.scss';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     children: [
//       {
//         path : "",
//         element : <Form />
//       },
//       {
//         path : "test",
//         element : <BusList />
//       }
//     ]

//   }
// ]);

// function App() {
//   return <RouterProvider router={router} />
// }

// export default App;




import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import BusList from "./AnuradhaBus/BusList/BusList";
import BusList from './components/BusList/BusList';
import SearchBus from "./components/SearchBus/SearchBus";
import AddBusStation from "./AnuradhaBus/AddBusStation/AddBusStation";
import AddBus from "./AnuradhaBus/AddBus/AddBus";
import Calendar from './components/Calendar/Calendar';


const router = createBrowserRouter([

  {
    path: "/",
    element: <SearchBus />,
  },
  {
    path : "/bus-list",
    element : <BusList />
  },
  {
    path : "/calendar",
    element : <Calendar />
  }
  // {
  //   path : '/add-bus-station',
  //   element : <AddBusStation />
  // }
  // {
  //   path : "/add-bus",
  //   element : <AddBus />
  // }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
