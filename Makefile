MOCHA_OPTS= --check-leaks
REPORTER = xunit

test: run test-unit

init: 
	mkdir build
	mkdir build/testResults

run:
	@NODE_PATH=/tmp/node_modules/ npm install

test-unit:
	@NODE_ENV=test mocha \
		@NODE_PATH=/tmp/node_modules/ \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS) > build/testResults/mocha.xml
	echo "Test complete..."

clean:
	rm -rf build
	rm -rf /tmp/node_modules

.PHONY: test test-unit test-acceptance benchmark clean