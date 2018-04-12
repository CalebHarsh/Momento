// app/models/user.js
// load the things we need
var ko = require('nekodb');
// var bcrypt   = require('bcrypt');

// define the schema for our user model
var userSchema = ko.Model("User", {
    local            : {
        email        : ko.Email,
        password     : ko.String,
    }
    // facebook         : {
    //     id           : String,
    //     token        : String,
    //     name         : String,
    //     email        : String
    // },
    // google           : {
    //     id           : String,
    //     token        : String,
    //     email        : String,
    //     name         : String
    // }
});

// methods ======================
// generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// create the model for users and expose it to our app
module.exports = UserSchema