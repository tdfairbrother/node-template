LIB?=*
MAIN?=main

test:
	@NODE_ENV=test  ./node_modules/.bin/mocha lib/$(LIB)/test/*.js -R spec -t 30000

test-coveralls:
	@NODE_ENV=test  ./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha lib/*/test/*.js -x "**/spec_helpers/**" --report lcovonly -- -R spec -t 30000

debug-test:
	@NODE_ENV=test  ./node_modules/.bin/mocha lib/$(LIB)/test/*.js -R spec -t 30000 --debug-brk

debug:
	@NODE_ENV=development node --debug-brk lib/${MAIN}/index.js

watch:
	@NODE_ENV=development ./node_modules/.bin/supervisor -w . lib/${MAIN}/index.js


.PHONY: test
