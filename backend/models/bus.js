
import mongoose, { Schema } from "mongoose";

const busSchema = new Schema({
    busNumber: {
        type: String,
        require: true
    },
    stops: [
        {
            name: { type: String, required: true },
            fair: { type: String, require: true },
            year : {type : String, required : true},
            month : {type : String, required : true},
            day : {type : String, required : true},
            hour : {type : String, required : true},
            minites : {type : String, required : true}
        }
    ]
});

const bus = mongoose.model('Bus', busSchema);

export default bus;

