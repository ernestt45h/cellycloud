var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserModel = require('../models/User.models');

let roles = ['client', 'pactitioner', 'admin', 'su', 'analysis']


var UserSchema = new Schema({
    name: {
        first: String,
        last: String,
    },
    role: {
        type: String,
        enum: []
    }
});


UserSchema.loadClass(UserModel)

UserSchema.pre('save', function(next) {
    let subname = this.name.toLowerCase().replace(/ /g,"_")
    this.subname = subname,
    this.created = new Date
    this.modified = new Date
    next()
})

UserSchema.pre('update', function(next){
    this.modified = new Date
})

module.exports = mongoose.model('permission', PermissionSchema)