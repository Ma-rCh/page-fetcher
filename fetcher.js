var http = require('http');
var fs = require('fs');
const request = require('request');
//var document = require('document');
const process = require('process');
// Printing process.argv property value
var args = process.argv;
var url = args[2];
var dest = args[3];
var cb = request(url, (error, response, body) => {
 
  let bsize = body.toString().length;
 console.log(`Downloaded and saved ${bsize} bytes to ${dest}`); 
 return body;

});
//console.log(dest.size)
var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
   fs.writeFile(dest, cb, { flag: 'a+' }, err => {});
   
    file.on('finish', function() {
      file.close(cb);
    });
 
}
download(url,dest,cb);

