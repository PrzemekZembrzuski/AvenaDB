const mongoose = require('mongoose');


class Database{
    constructor(){
        this._connect()
    }
    async _connect(){
        try {
            await mongoose.connect(process.env.DBURL,{
                useNewUrlParser: true 
            })    
        } catch (error) {
            console.error(error)
        }
        
    }
}


module.exports = new Database()