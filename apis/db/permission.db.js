var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PermissionModel = require('../models/Permission.models')


var PermissionSchema = new Schema({
    name: {
            type: String,
            required: [true, 'name required'],
            unique: [true, 'name already taken']
        },
    subname: String,
    type: {
        type: String,
        enum: ['navigation', 'analytics', 'dev'],
        required: [true, 'type required'],
    },
    icon: String,
    role: {
        type: String,
        required: [true, 'role required'],
        enum: [
            'developer', 
            'administrative ', 
            'informational ', 
            'therapeutic',
            'diagnostic',
            'support',
            'in_patient',
            'out_patient'
        ]
    }, 
    targets: {
        type: [ String ],
        required: [true, 'Targets required'],
        enum: [
            'developer', 
            'administrative ', 
            'informational ', 
            'therapeutic',
            'diagnostic',
            'support',
            'in_patient',
            'out_patient'
        ]
    },
    created: Date,
    modified: Date
});


PermissionSchema.loadClass(PermissionModel)

PermissionSchema.pre('save', function(next) {
    let subname = this.name.toLowerCase().replace(/ /g,"_")
    this.subname = subname,
    this.created = new Date
    this.modified = new Date
    next()
})

PermissionSchema.pre('update', function(next){
    this.modified = new Date
})

module.exports = mongoose.model('permission', PermissionSchema)