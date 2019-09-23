const Firebird = require('node-firebird')


class Database {
    constructor(serverdb, pathdb, logindb = 'SYSDBA', passwroddb = 'masterkey') {
        this.db = undefined;
        this.options = {
            host: serverdb,
            port: 3050,
            database: pathdb,
            user: logindb,
            password: passwroddb,
            lowercase_keys: false,
            role: null,
            pageSize: 4096
        }
    }


    connect() {
        if (this.db) {
            this.disconnect()
        }

        return new Promise((resolve, reject) => {
            Firebird.attach(this.options, (err, db) => {
                if (err) {
                    reject(err)
                    return
                }
                this.db = db
                resolve(db)
            });
        })
    }
    query(recNum) {
        return new Promise((resolve, reject) => {

            this.db.query(`SELECT LEKA.NAZWU,TOWR.NAZWU as TOWRNAZWU,SPRZ.NRKLN,SPRZ.POZRP,SPRZ.NRORC,SPRZ.KODR1,SPRZ.KODR2,SPRZ.KODR3,SPRZ.KODR4,SPRZ.DGAKT FROM SPRZ INNER JOIN LEKA ON SPRZ.IDLEKA = LEKA.ID INNER JOIN TOWR ON SPRZ.IDTOWR = TOWR.ID WHERE KODR1 = '${recNum}'`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    }
    getPharmacyName(){
        return new Promise((resolve, reject) => {
            this.db.query(`SELECT NAZW1 FROM FIRM`, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    }
    disconnect(){
        this.db.detach()
    }


}
module.exports = Database




// 0207000000008693725487
// D:\\avena3ciecie2017\\wapteka.fdb