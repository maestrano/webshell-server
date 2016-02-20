var fs = require('fs');
var dir = '/etc/webshell';
var configFile = '/etc/webshell/config.js';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

if (!fs.existsSync(configFile)) {
  fs.createReadStream(__dirname + '/../config.js').pipe(fs.createWriteStream(configFile));
}
