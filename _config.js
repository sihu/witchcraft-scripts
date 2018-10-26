let config = {};

try {
  eval(`
    config =
      // @include .config.json
    ;
  `);
}
catch(err) {
  throw 'There is something wrong with your configuration. Did you create a file called ".config.json"?';
}

function callIfEnabled(configKey, callback) {
  if(config[configKey]) {
    callback();
  }
}

