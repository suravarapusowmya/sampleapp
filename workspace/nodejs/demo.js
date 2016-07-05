var http = require("http");
var server = http.createServer(function (req,res)
{
res.writeHead(200,{"content-type" : "text/plain"});
res.write("Hello World \n");
res.end("sowmya")
});
server.listen(4000);
console.log("server port 4000");