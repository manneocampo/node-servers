var http = require("http");

var PORTONE = 7000; 

var PORTTWO = 7500; 

var niceMessage = ["You are nice", "You are superb", "You can do anything"];

var meanMessage = ["You suck", "You're mean", "Get lost"];


//handles the request and sends the messages to the webpage
function handleRequestOne (request, response) {
	var random = Math.floor(Math.random()*niceMessage.length);

	response.end("Server one works\n" + niceMessage[random]);
}

function handleRequestTwo (request, response){
	var random = Math.floor(Math.random()*niceMessage.length);
	response.end("Server Two works\n" + meanMessage[random]);
}


//code for developers in the command line to know the servers are running 
var serverOne = http.createServer(handleRequestOne); 

serverOne.listen(PORTONE, function(){
	console.log("server one is on");
})

var serverTwo = http.createServer(handleRequestTwo); 

serverTwo.listen(PORTTWO, function(){
	console.log("server two is on");
})