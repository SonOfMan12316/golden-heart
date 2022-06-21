const { default: mongoose } = require("mongoose");

var studentSchema = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    date: Date
});

var StudentModel = mongoose.model("Student", studentSchema);

module.exports = StudentModel;