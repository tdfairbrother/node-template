LIB?=*
MAIN?=main
DEBUG?=node-template*
DEBUG_TEST?=''

test:
	@NODE_ENV=test DEBUG=$(DEBUG_TEST) ./node_modules/.bin/mocha lib/$(LIB)/test/*.js -R spec -t 30000

test-watch:
	@NODE_ENV=test DEBUG=$(DEBUG_TEST) ./node_modules/.bin/mocha lib/$(LIB)/test/*.js -R spec -w . -t 30000

test-coveralls:
	@NODE_ENV=test DEBUG=$(DEBUG_TEST) ./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha lib/*/test/*.js -x "**/spec_helpers/**" --report lcovonly -- -R spec -t 30000

debug-test:
	@NODE_ENV=test DEBUG=$(DEBUG) ./node_modules/.bin/mocha lib/$(LIB)/test/*.js -R spec -t 30000 --debug-brk

debug:
	@NODE_ENV=development DEBUG=$(DEBUG) node --debug-brk lib/${MAIN}/index.js

start:
	@NODE_ENV=development DEBUG=$(DEBUG) node lib/${MAIN}/index.js

console:
	@NODE_ENV=development DEBUG=$(DEBUG) node repl/console.js

repl-server:
	@NODE_ENV=development DEBUG=$(DEBUG) node repl/server.js

watch:
	@NODE_ENV=development  DEBUG=$(DEBUG) ./node_modules/.bin/supervisor -w . lib/${MAIN}/index.js

.PHONY: test
