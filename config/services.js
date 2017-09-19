module.exports = {
    user:process.env.NODE_ENV !== 'production'? "http://localhost:3004" :"https://hipopo-users.now.sh",
    auth:process.env.NODE_ENV !== 'production'? "http://localhost:3001" :"https://hipopo-auth.now.sh",
    family:process.env.NODE_ENV !== 'production'? "http://localhost:3006" :"https://hipopo-family.now.sh"
}
