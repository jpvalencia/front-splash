module.exports = {
    user:process.env.NODE_ENV !== 'production'? "http://localhost:3004" :"https://hipopo-services-users.now.sh",
    auth:process.env.NODE_ENV !== 'production'? "http://localhost:3001" :"https://hipopo-services-auth.now.sh",
    family:process.env.NODE_ENV !== 'production'? "http://localhost:3006" :"https://hipopo-services-family.now.sh",
    properties:process.env.NODE_ENV !== 'production'? "http://localhost:3007" :"https://hipopo-services-properties.now.sh",
    vehicles:process.env.NODE_ENV !== 'production'? "http://localhost:3008" :"https://hipopo-services-vehicles.now.sh",
    investments:process.env.NODE_ENV !== 'production'? "http://localhost:3009" :"https://hipopo-services-investments.now.sh"
}
