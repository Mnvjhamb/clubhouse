const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: false
    },
    phone: {
        type: String, 
        required: true
    },
    profile: {
        type: String,
        required: false,
        get: (profile) => {
            return `${process.env.BASE_URL}${profile}`
        }
    }
    ,
    activated: {
        type: Boolean,
        required: false,
        default: false
    }
}, {
    timestamps: true,
    toJSON: {
        getters: true
    }
});

module.exports = mongoose.model('User', userSchema, 'users');