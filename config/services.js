module.exports = {
    user:process.env.NODE_ENV !== 'production'? "http://localhost:3004" :"https://hipopo-services-users.now.sh",
    auth:process.env.NODE_ENV !== 'production'? "http://localhost:3001" :"https://hipopo-services-auth.now.sh",
    family:process.env.NODE_ENV !== 'production'? "http://localhost:3006" :"https://hipopo-services-family.now.sh",
    properties:process.env.NODE_ENV !== 'production'? "http://localhost:3007" :"https://hipopo-services-properties.now.sh",
    vehicles:process.env.NODE_ENV !== 'production'? "http://localhost:3008" :"https://hipopo-services-vehicles.now.sh",
    investments:process.env.NODE_ENV !== 'production'? "http://localhost:3009" :"https://hipopo-services-investments.now.sh",
    companies:process.env.NODE_ENV !== 'production'? "http://localhost:3010" :"https://hipopo-services-companies.now.sh",
    personal:process.env.NODE_ENV !== 'production'? "http://localhost:3011" :"https://hipopo-services-personal.now.sh",
    employees:process.env.NODE_ENV !== 'production'? "http://localhost:3012" :"https://hipopo-services-employees.now.sh",
    spouses:process.env.NODE_ENV !== 'production'? "http://localhost:3013" :"https://hipopo-services-spouses.now.sh"
}
