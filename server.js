var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors') ({origin:true,});

var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);

app.all('location.html', function (request, response) {
    var fs = require('fs');
    fs.readFile('locationi.body.xml',function (error,data) {
        if (error) {
            console.log(error);
        } else {
            response.writeHead(200,{'Content-Type' : 'text/html'});
            response.end(data);
        }
    })
});
app.all('histories.html', function (request, response) {
    var fs = require('fs');
    fs.readFile('histories.html',function (error,data) {
        if (error) {
            console.log(error);
        } else {
            response.writeHead(200,{'Content-Type' : 'text/html'});
            response.end(data);
        }
    })
});
app.all('prosNcons.html', function (request, response) {
    var fs = require('fs');
    fs.readFile('prosNcons.html',function (error,data) {
        if (error) {
            console.log(error);
        } else {
            response.writeHead(200,{'Content-Type' : 'text/html'});
            response.end(data);
        }
    })
});
app.all('req.html', function (request, response) {
    var fs = require('fs');
    fs.readFile('req.html',function (error,data) {
        if (error) {
            console.log(error);
        } else {
            response.writeHead(200,{'Content-Type' : 'text/html'});
            response.end(data);
        }
    })
});

http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
