const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');



const app = express();
//middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//passport
app.use(passport.initialize());
require('./config/passport')(passport)


//routess
let usersRoute;
usersRoute = require('./routes/api/users');
app.use('/users', usersRoute)

//Database Config
const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true })
.then(() => {
    console.log(`Database connected successfully ${db}`)
})
.catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});


//Defining Routes
app.get('/', (req, res) => {
    return res.json("msg: Fuck you");
})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})



//Port Config
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server started on port ${PORT}`);
})