module.exports = {
    user:process.env.NODE_ENV !== 'production'? "http://localhost:3004" :"https://users-lmrioonbwc.now.sh",
    auth:process.env.NODE_ENV !== 'production'? "http://localhost:3001" :"https://auth-eiaqykvqaw.now.sh",
}
