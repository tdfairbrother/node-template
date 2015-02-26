[![Build Status](https://semaphoreapp.com/api/v1/projects/4e50bd69-64e7-425d-ab37-b5dff542cc4a/359596/badge.png)](https://semaphoreapp.com/tdfairbrother/node-template)

[![Coverage Status](https://coveralls.io/repos/tdfairbrother/node-template/badge.svg?branch=develop)](https://coveralls.io/r/tdfairbrother/node-template?branch=develop)


Node Template
====================


Setup
--------------

Some of the ideas here have been inspired by the following article.
http://strongloop.com/strongblog/modular-node-js-express/


```sh
npm install
```

To run
```sh
npm start
```

To run tests
```sh
npm test
```

Make Commands
--------------

Runs all tests and watches for changes
```sh
 make test-watch
```

Debug a test
```sh
make debug-test
```

Debug the app
```sh
make debug
```

Start the app
```sh
make start
```

Start the app watching for changes
```sh
make watch
```

Start the app and run a repl
```sh
make console
```

Start the app and run a repl listening to config.repl.port
```sh
make repl-server
```

Run make tasks using variables
```sh
 make test-watch LIB=log
 make start DEBUG=*
```

The environment variables default to:
```sh
LIB?=*
MAIN?=main
DEBUG?=node-template*
DEBUG_TEST?=''
```


