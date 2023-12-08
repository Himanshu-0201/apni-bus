
import express from "express";

import { getBusByID, getBusStations, searchBuses } from "../controllers/get-details.js";

const route = express.Router();


route.get('/search-buses', searchBuses);

route.get('/bus-list', searchBuses);

route.get('/bus/:busId', getBusByID);

route.get('/bus-stations', getBusStations);



export default route;

