
import express from "express";

import { searchBuses } from "../controllers/get-details.js";

const route = express.Router();


route.get('/search-buses', searchBuses);

route.get('/bus-list', searchBuses);



export default route;

