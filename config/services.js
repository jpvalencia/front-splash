module.exports = {
    auth:process.env.NODE_ENV !== 'production'? "http://localhost:3003" :"https://hipopo-services-auth.now.sh",
}
