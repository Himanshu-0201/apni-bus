
import express from "express";
import { addBusStation , addBus } from "../controllers/add-details.js";



const route = express.Router();

route.get('/add-bus-station', addBusStation);
route.post('/add-bus',  addBus);

// route.delete('/delete-bus', deleteBus);

export default route;