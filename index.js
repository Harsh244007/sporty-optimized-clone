const express = require("express");
const bodyParser = require("body-parser");
const locateData = require("./apis/data/locate.json")
const latestData = require("./apis/data/latest.json")
const trendsData = require("./apis/data/trends.json")
const videosData = require("./apis/data/videos.json")
const infoData = require("./apis/data/info.json")
const path = require("path");
const app = express();
const port = 5508;
app.use(bodyParser.json());

app.get("/patron/country/locate", (req, res) => {
    res.send(locateData)
})
app.get("/api/patron/country/locate", (req, res) => {
    res.send(locateData)
})



app.get("/api/news/favorite/list", (req, res) => {
    res.send([])
})


app.get("/middle/feed/trends", (req, res) => {
    res.send(trendsData)
})
app.get("/middle/feed/videos", (req, res) => {
    res.send(videosData)
})
app.get("/middle/feed/latest", (req, res) => {
    res.send(latestData)
})

app.get("/api/middle/feed/trends", (req, res) => {
    res.send(trendsData)
})
app.get("/api/middle/feed/videos", (req, res) => {
    res.send(videosData)
})
app.get("/api/middle/feed/latest", (req, res) => {
    res.send(latestData)
})

app.get("/sms-center/captcha/config/info", (req, res) => {
    res.send(infoData)
})

app.get("/api/sms-center/captcha/config/info", (req, res) => {
    res.send(infoData)
})




app.get("/favicon.ico", (e, p) => {
    p.sendFile(path.join(__dirname, "/favicon.ico"));
});
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/fonts", express.static(__dirname + '/fonts'));

app.get("*", (e, p) => {
    p.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(port, () => { })