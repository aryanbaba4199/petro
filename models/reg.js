import mongoose from 'mongoose';

const regSchema = new mongoose.Schema({
    firmName : {
        type : String,
        required : true
    },
    brand : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    }
    ,
    userDetail : {
        type : []
        
    }
});

const Firm = mongoose.models['Firm'] ||
mongoose.model('Firm', regSchema);

export default Firm;