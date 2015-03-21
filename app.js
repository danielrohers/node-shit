var http = require('http');
var fs = require('fs');

var _readPage = function (file, cb) {
    fs.readFile(__dirname + file, function(err, data){
        if (err)
            return console.log(err);

        return cb(data);
    });
}

var _writePage = function (res, data) {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}

var server = http.createServer(function(req, res){
    switch (req.url) {
        case '/':
            _readPage('/index.html', function (data) {
                _writePage(res, data);
            });
            break;
        case '/help':
            _readPage('/help.html', function (data) {
                _writePage(res, data);
            });
            break;
        default:
            _readPage('/error.html', function (data) {
                _writePage(res, data);
            });
            break;
    }
});

server.listen(3000, function(){
  console.log('Listen 3000');
});
