
import Bus from "../models/bus.js";

export const searchBuses = (req, res)=>{
    
    const queryParameters = req.query;
    console.log(queryParameters);

    const destination = queryParameters.destination.toUpperCase();
    const departure = queryParameters.departure.toUpperCase();
    const year = queryParameters.year.toUpperCase();
    const month = queryParameters.month.toUpperCase();
    const day = queryParameters.day.toUpperCase();

    console.log(destination);




    // Bus.find({stops : {$elemMatch : { $eq : departure}}, stops : {$elemMatch : {$eq : destination}}})
    // .then(buses => {
    //     // res.send("😁");
    //     console.log(buses);
    //     return res.send(buses);
    // })
    // .catch(error => {
    //     console.log(error);
        // return res.send("😑");
    // });


    Bus.find({'stops.name' : departure, 'stops.name' : destination, 'stops.year' : year, 'stops.month' : month, 'stops.day' : day})
    .then(buses => {
        // res.send("😁");
        console.log(buses);
        return res.send(buses);
    })
    .catch(error => {
        console.log(error);
        return res.send("😑");
    });


};
