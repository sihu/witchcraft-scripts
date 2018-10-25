# Renuo Witchcraft scripts

## Installation

1. Follow the instructions on
   <https://luciopaiva.com/witchcraft/how-to-install.html>
1. Create a `.config.json` to enable scripts. It should be of the form
   `{ "sentry.io": true, "ci.local.ch": false }`

## Contribute

Please add your scripts wrapped like this:

    // @include _config.js
    callIfEnabled('sentry.io', function() {
    
      …
    
    });
