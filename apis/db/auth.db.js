var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuthModel = require('../models/Auth.models');

var AuthSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['inactive', 'active', 'disabled', 'deleted'],
        default: 'inactive'
    },
});


AuthSchema.loadClass(AuthModel)

AuthSchema.pre('save', function(next) {
    let subname = this.name.toLowerCase().replace(/ /g,"_")
    this.subname = subname,
    this.created = new Date
    this.modified = new Date
    next()
})

AuthSchema.pre('update', function(next){
    this.modified = new Date
})

module.exports = mongoose.model('permission', PermissionSchema)