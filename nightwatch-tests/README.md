# nightwatchjs framework

[Nightwatch](http://nightwatchjs.org) Tool supports UI automated testing framework powered by [Node.js](http://nodejs.org/). It uses the [Selenium WebDriver API](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).

***

#### [Homepage](http://nightwatchjs.org) | [Getting Started](http://nightwatchjs.org/getingstarted) | [Developer Guide](http://nightwatchjs.org/guide) | [API Reference](http://nightwatchjs.org/api) | [Changelog](https://github.com/nightwatchjs/nightwatch/releases)

### Install repository

Install Node.js and then:
```sh
$ git clone git@github.com:GannettDigital/test-automation-labs.git
$ cd test-automation-labs
$ cd nightwatch-skeleton
$ npm install -g nightwatch
$ npm install
```

### Run tests
The tests for Nightwatch uses selenium standalone server irrespective of the browser used. Here are the commands to run the tests for the specific browsers locally:

To run the integration tests requires passing environment profile, do:

#### Some environments REQUIRE Sauce Connect for private network sites
https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy 

#### Execute all test suites with environment variables
```sh
$ HTTP='https://amp.' SITE_NAME='desmoinesregister.com' nightwatch -e mobile-web
```

#### Execute specific tagged test
```sh
$ nightwatch -e stage-windows-firefox --tag desktop
```

#### Execute 

The output saved in ```reports``` directory.

### To do: Add more testing options

#Writing tests

For developing tests, nightwatchjs has a few examples listed under their guide, for further examples, refer to the tests folder.

http://nightwatchjs.org/guide


### Discuss
The [Mailing List/Google Group](https://groups.google.com/forum/#!forum/nightwatchjs) is the most appropriate tool for Nightwatch related discussions. In addition, there is a [StackOverflow Nightwatch.js tag](http://stackoverflow.com/questions/tagged/nightwatch.js) at your disposal and [Twitter](https://twitter.com/nightwatchjs).

### Setup Guides
Specific WebDriver setup guides can be found on the [Docs website](http://nightwatchjs.org/getingstarted#browser-drivers-setup).
Legacy Selenium drivers setup guides along with debugging instructions can be found on the [**Wiki**](https://github.com/nightwatchjs/nightwatch/wiki).
