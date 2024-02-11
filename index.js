const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

//connection
mongoose.connect('mongodb://127.0.0.1:27017/medicines_data');

//schema
const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        integer: true
    }
});

// Create Medicine model
const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;

app.use(express.static("public"));

app.get("/", (req, res) => {
    const indexPath = path.join(process.cwd(), "public", "home.html");
    res.sendFile(indexPath);
});


app.get("/about", (req, res) => {
    return res.send("Hello from " + req.url + " page");
});
const myServer = http.createServer(app);
const PORT = 8000;
myServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));
