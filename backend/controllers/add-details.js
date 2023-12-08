
import BusStation from "../models/bus-station.js";
import Bus from "../models/bus.js";

export const addBusStation = (req,res) => {
    const queryParameters = req.query;
    const queryParametersBusStation = queryParameters.busStation;

    BusStation.findOne({name : queryParametersBusStation})
    .then( busStation => {

        if(busStation){
            return res.json("This bus station is already exist");
        }

        const newBusStation = new BusStation({
            name : queryParametersBusStation
        });

        return newBusStation.save();

    })
    .then(()=>{
        return res.json("Bus station has added successfully");
    })
    .catch(error => {
        console.log(error);
    })

};

export const addBus = (req, res)=>{
    // console.log(req.body);

    const busNumber = req.body.busNumber;
    const stops = req.body.stops;

    console.log(stops);



    const updatedStops = stops.map((stop) => {


        const updatedStop = {
            ...stop,
            stopName : stop.stopName.toUpperCase()
        }

        console.log(updatedStop);
        return updatedStop;
    });

    Bus.findOne({busNumber : busNumber})
    .then(bus => {

        if(bus){
            Bus.updateOne({busNumber : busNumber}, {stops : updatedStops})
            .then( result => {
                console.log(res);
                return res.json("You bus data has updated succusfully");
            })
            .catch(error => {
                console.log(error);
            })
        }
        else{

            const newBus = new Bus({
                busNumber : busNumber,
                stops : updatedStops
            });

            newBus.save();

            return res.json("Your bus has added succussfully");
        }

    })

};


export const deleteBus = (req,res)=>{
    // write a code for delete the bus
}