import mongoose, { Schema } from "mongoose";


const busStationSchema = new Schema({
    name : {
        type : String,
        require : true
    }
});


const busStation = mongoose.model('BusStation', busStationSchema);

export default busStation;