# hb-javascript-test-101

[![Travis](https://img.shields.io/travis/andres9722/hb-javascript-test-101.svg)](https://travis-ci.org/andres9722/hb-javascript-test-101/)
[![Codecov](https://codecov.io/gh/andres9722/hb-javascript-test-101/branch/master/graph/badge.svg)](https://codecov.io/gh/andres9722/hb-javascript-test-101)

Install in devDependencies codecov.io

Create archive .travis.yml

Adding in Scripts:
```"scripts": {
    "test": "jest --coverage",
    "report-coverage": "cat ./coverage/lcov.info | codecov"
}```

Config repo in Travis CI