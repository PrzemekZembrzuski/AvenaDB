const bcrypt = require('bcrypt') 



bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('Avena9', salt, function(err, hash) {
        console.log(hash)
    });
});