const tokenExtract = (req)=>{
    const cookies =  req.headers.cookie ? req.headers.cookie.split('=') : [];
    const token = cookies.indexOf('token') > -1 ? cookies[cookies.indexOf('token')+1] : undefined 
    return token
}
module.exports = tokenExtract