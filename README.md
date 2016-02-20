Webshell
-----------------

Terminal over HTTP and HTTPS. Outrageously inspired from the excellent [Wetty](https://github.com/krishnasrinivas/wetty) - adapted to support web based authentication.

Not production ready.

Install
-------

*  `git clone https://github.com/maestrano/webshell`

*  `cd webshell`

*  `npm install`

Run:
-----------

    node app.js -p 3000

Run webshell as a service daemon
-----------------------------

Install webshell globally with -g option:

```bash
    $ sudo npm install webshell-server -g
    $ sudo cp /usr/local/lib/node_modules/webshell/bin/webshell-server.conf /etc/init
    $ sudo start webshell-server
```

This will start webshell on port 9443.

Webshell configuration can be edited at /etc/webshell/config.js
