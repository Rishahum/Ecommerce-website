const mongoose = require('mongoose');

const productSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"]
    },
    description: {
    type: String,
    required: [true, "please enter description"]
    },
    price:{
        type:Number,
        required:[true, "Please enter price"],
        maxLength: [7, "Price cannot be excedded to 7 characters"]
    },
    rating:{
        type: Number,
        default:0
    },
    image:[
        {
            public_id:{
                type: String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required: [true, "Please Enter category"],
    },
    Stock:{
        type: Number,
        maxLength:[4, "Stock cannot exceed more than 4 character"],
        default: 0,
        
    },
    numOfReviews:{
        type: Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required: true
            },
            rating:{
                type: Number,
                required:true
            },
            comment:{
                type:String,
                required: true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default: Date.now,
    }

})
module.exports= mongoose.model("products", productSchema)