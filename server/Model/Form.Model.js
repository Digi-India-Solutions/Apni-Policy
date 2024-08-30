const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    zipCode: {
        type: String
    },
    insuranceType: {
        type: String
    },
    additionalInfo: {
        type: String
    },
    planType: {
        type: String
    },
    coverType: {
        type: String
    },
    sumInsured: {
        type: String
    },
    tenure: {
        type: String
    },
    // businessType: {
    //     type: String
    // }
})

const Form = mongoose.model('Form', FormSchema)
module.exports = Form