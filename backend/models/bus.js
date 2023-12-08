
import mongoose, { Schema } from "mongoose";

const busSchema = new Schema({
    busNumber: {
        type: String,
        require: true
    },
    stops: [
        {
            stopName: { type: String, required: true },
            fair: { type: String, require: true },
            arriveDate : {type : Date, require : true},
            departureDate : {type : Date, require : true}
        }
    ]
});

const bus = mongoose.model('Bus', busSchema);

export default bus;

