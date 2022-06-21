if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://golden_heart_funaab:weblessyournameLord@goldenheartfunaab.mkbr3zq.mongodb.net/test",
        secret: 'yoursecret'
    }
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/golden_heart_funaab",
        secret: 'yoursecret'
    }
}