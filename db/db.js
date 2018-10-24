const mongoose = require('mongoose');

module.exports = {
    connect : () => {
        mongoose.connect("mongodb://localhost:27017/appaluno");
    },
    disconnect : () => {
        mongoose.disconnect();
    }
}