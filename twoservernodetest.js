var http = require("http");

var PORTNICE = 7000; 

var PORTMEAN = 7500; 

var niceMessage = ["You are nice", "You are superb", "You can do anything"];

var meanMessage = ["You suck", "You're mean", "Get lost"];


//handles the request and sends the messages to the webpage
function handleRequestNice (request, response) {
	var random = Math.floor(Math.random()*niceMessage.length);

	response.end("Server one works\n" + niceMessage[random]);
}

function handleRequestMean (request, response){
	var random = Math.floor(Math.random()*niceMessage.length);
	response.end("Server Two works\n" + meanMessage[random]);
}


//code for developers in the command line to know the servers are running 
var serverNice = http.createServer(handleRequestNice); 

serverNice.listen(PORTNICE, function(){
	console.log("server one is on");
})

var serverMean = http.createServer(handleRequestMean); 

serverMean.listen(PORTMEAN, function(){
	console.log("server two is on");
})