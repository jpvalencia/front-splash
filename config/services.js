module.exports = {
    user:process.env.NODE_ENV !== 'production'? "http://localhost:3004" :"",
    auth:process.env.NODE_ENV !== 'production'? "http://localhost:3001" :"",
}
