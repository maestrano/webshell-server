Webshell Server
-----------------

Terminal over HTTP and HTTPS. Outrageously inspired from the excellent [Wetty](https://github.com/krishnasrinivas/wetty) - adapted to support web based authentication.

Not production ready.

Install
-------
```bash
git clone https://github.com/maestrano/webshell-server
cd webshell-server
npm install
```

Run:
-----------

```bash
node app.js -p 3000
```

Configuration - Example accessing docker containers
-----------------------------------------------------
Edit the config.js file in the project directory to specify how authentication should be handled and what shell command should be run at startup.

E.g.
```js
var config = {};

// Session Configuration
config.session = {
  key: 'webshell',
  secret: 'a-session-secret-that-you-should-change',
};

// Uses passport under the hood
// Best option here is to make a REST API call to some authentication
// endpoint of your own
//
// Here we authorise user with login "foo" and password "bar"
config.authFn = function(req, username, password, cb) {
  if (username == "foo" && password == "bar" && req.body.resource_id) {
    return cb(null, { id: username, resource_id: req.body.resource_id });
  } else {
    return cb(null, false, { message: 'Invalid credentials' });
  }
}

// Which command to run upon user authentication
// Here we attach to a docker container
config.shellEntrypoint = function(req) {
  return {
    script: '/usr/local/bin/docker',
    args: ['exec', '-it', req.user.resource_id, '/bin/bash'],
  };
}

module.exports = config;
```

**Run your application:**  
```bash
node app.js -p 3000
```

**Login using foo/bar:**  
http://localhost:3000/login?rid=my-container-name-or-id

You should be inside your docker container.

Run webshell as a service daemon
-----------------------------

Install webshell-server globally with -g option:

```bash
sudo npm install webshell-server -g
sudo cp /usr/local/lib/node_modules/webshell-server/bin/webshell-server.conf /etc/init
sudo start webshell-server
```

This will start webshell-server on port 9443.

Webshell configuration can be edited at /etc/webshell/config.js
