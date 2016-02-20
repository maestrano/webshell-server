var config = {};

// Session Configuration
config.session = {
  key: 'webconsole',
  secret: '2asd7f4d6s15s74d',
};

// User authentication function
config.authFn = function(req, username, password, cb) {
  if (username == "foo" && password == "bar") {
    var resource_id = req.body.resource_id || 'default';
    return cb(null, { id: username, resource_id: resource_id });
  } else {
    return cb(null, false, { message: 'Invalid credentials' });
  }
}

// Shell Entrypoint
// req: socket.io request object
config.shellEntrypoint = function(req) {
  return {
    script: __dirname + '/bin/entrypoint',
    args: [req.user.resource_id],
  };
}

module.exports = config;
