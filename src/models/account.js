const { Schema, model } = require('mongoose');
const accountSchema = new Schema({
    number: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    balance: {
        type: Number,
        required: true,
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    },
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: 'transaction',
        autopopulate: true
    }]
});

accountSchema.plugin(require('mongoose-autopopulate'));
module.exports = model('account', accountSchema);