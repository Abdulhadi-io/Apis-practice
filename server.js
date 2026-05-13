import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Shuker backend chal raha he 
             ");
});

app.get("/api/game",(req, res) => {
    res.json({
        name:"Free fire",
        bundles:13,
        profession:"gaming"
    });
});

app.get("/api/car",(req, res) => {
    res.json({
        name:"BMW",
        model:"M5",
        color:"purple"
    });
});

app.get("/api/anime",(req, res) => {
    res.json({
        name:"Vegeta",
        year:35,
        profession:"fighting"
    });
});

app.get("/api/user", (req, res) => {
    res.json({
        name: "Hadi",
        age: 17,
        profession: "Backend Developer"
    });
});

app.listen(3000, () => {
    console.log("Server Started");
});
