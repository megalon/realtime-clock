// --------------------------------
const settings = {
	port: 80,
	path: "/image"
};
// --------------------------------

const express = require("express");
const TimeInImage = require(__dirname+"/time-in-image");

var app = express();

// so bots crawling root pages would stop throwing errors in logs
app.get('/', function (req, res) {
	res.send('nothing here')
})

var timeInImage = new TimeInImage(app, settings.path);
timeInImage.onRequest = req=>{
	let ip = req.ip.split(":")[3];
	console.log(ip+=" requested the time");
}

app.listen(settings.port, ()=>{
	console.log("Web server open at *:"+settings.port+settings.path);
});