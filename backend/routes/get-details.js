
import express from "express";

import { getBusByID, searchBuses } from "../controllers/get-details.js";

const route = express.Router();


route.get('/search-buses', searchBuses);

route.get('/bus-list', searchBuses);

route.get('/bus/:busId', getBusByID);



export default route;

