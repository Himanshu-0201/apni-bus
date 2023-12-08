import mongoose, { Schema } from "mongoose";


const busStationSchema = new Schema({
    name : {
        type : String,
        require : true
    }
});


const BusStation = mongoose.model('BusStation', busStationSchema);

export default BusStation;