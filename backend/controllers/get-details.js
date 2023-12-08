
import BusStation from "../models/bus-station.js";
import Bus from "../models/bus.js";

export const searchBuses = (req, res)=>{
    
    const queryParameters = req.query;

    const destination = queryParameters.destination.toUpperCase();
    const departure = queryParameters.departure.toUpperCase();

    const inputDate = new Date(queryParameters.date);
    inputDate.setHours(0, 0, 0, 0);
    const nextDay = new Date(inputDate);
    nextDay.setDate(inputDate.getDate() + 1);


    Bus.find({'stops.stopName' : departure, 'stops.stopName' : destination, 'stops.arriveDate' : {  $gte: inputDate, $lt: nextDay  }})
    .then(buses => {
        console.log(buses);
        return res.send(buses);
    })
    .catch(error => {
        console.log(error);
        return res.send("😑");
    })

};


export const getBusByID = (req, res)=>{
    const busId = req.params.busId;

    Bus.findOne({_id : busId})
    .then(bus => {
        console.log(bus);
        return res.send(bus);
    })
    .catch(error => {
        console.log(error);
    })
}

export const getBusStations = (req, res)=>{

    BusStation.find({})
    .then(busStations => {
        return res.send(busStations);
    })
    .catch(error => {
        console.log(error);
    })
};
