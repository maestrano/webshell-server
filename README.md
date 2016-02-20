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
    $ sudo npm install webshell-server --prefix /opt -g
    $ sudo cp /usr/local/lib/node_modules/webshell/bin/webshell-server.conf /etc/init
    $ sudo start webshell-server
```

This will start webshell on port 3000. If you want to change the port or redirect stdout/stderr you should change the last line in `webshell.conf` file, something like this:

    exec sudo -u root webshell -p 80 >> /var/log/webshell.log 2>&1
