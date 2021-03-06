var print = require('pretty-print');

var config = function (app) {
  app.program
    .command('config')
    .description('list, set, or remove keys and values from your app')
    .example('config:[action] [key] [value]')
    .withConfig()
    .handler(function () {
      app.logger.writeln();
      app.logger.info('Divshot.io'.blue + ' config file values');
      app.logger.writeln();
      
      print(app.cwd.getConfig(), {padding: 3});
    });
  
  add(app);
  remove(app);
};

function add (app) {
  app.program
    .command('config:add [key] [value]')
    .description('add a value to the config file')
    .example('config:add [key] [value]')
    .withConfig()
    .handler(function (key, value) {
      if (!key || !value) return app.logger.error('Config key and value is required: ' + 'divshot config:add [key] [value]'.bold);
      
      app.cwd.setConfigValue(key, value);
      app.logger.writeln();
      app.logger.success(key.bold + ' set to ' + value.bold);
    });
}

function remove (app) {
  app.program
    .command('config:remove [key]')
    .description('remove a value from the config file')
    .example('config:remove [key]')
    .withConfig()
    .handler(function (value) {
      if (!value) return app.logger.error('Config value is required: ' + 'divshot config:remove [value]'.bold);
      
      app.cwd.removeConfigValue(value);
      app.logger.writeln();
      app.logger.success(value.bold + ' removed');
    });
}

function configUsage () {
  var usage = '\n';
  usage += 'list, set, or remove keys and values from your';
  usage += ' Divshot.io'.blue;
  usage += ' config file:\n\n';
  usage += '  config:[action] [key] [value]'.bold;
  
  return usage;
}

module.exports = config;