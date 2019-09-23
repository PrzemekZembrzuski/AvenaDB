const encode = text=>{
    return Buffer.from(text).toString('hex')
}

const decode = hex=>{
    return Buffer.from(hex,'hex').toString()
}

module.exports = {
    encode,
    decode
}