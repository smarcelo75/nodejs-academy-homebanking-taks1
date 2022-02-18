const { Schema, model } = require('mongoose');
const accountSchema = new Schema({
    number: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
    },
    balance: {
        type: Number,
        required: true,
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = model('account', accountSchema);