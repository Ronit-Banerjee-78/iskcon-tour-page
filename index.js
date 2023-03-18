const express = require("express")
const PORT = process.env.PORT || 10400
const User = require("./user/user")

const app = express();

const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/fromsubmit", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("connection is successful"))
//     .catch((err) => console.log("some err" + err));
mongoose.connect("mongodb+srv://Ronit:2uAAEHPLyDwTjmHd@ronit78.9ruekvd.mongodb.net/Ronit78?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection is successful"))
    .catch((err) => console.log("some err" + err));

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")
    // mongodb + srv: //Ronit:<password>@ronit78.9ruekvd.mongodb.net/?retryWrites=true&w=majority

app.get("/", (req, res) => {
    res.render("index")
})
app.post("/", async(req, res) => {
    const data = new User(req.body);
    await data.save();

    res.render("index")
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`i am live at ${PORT}`);
})