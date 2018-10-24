const config =
  // @include .config.json
;

function callIfEnabled(configKey, callback) {
  if(config[configKey]) {
    callback();
  }
}

