# Nightwatch functional test repository

## NightwatchJS framework

[Nightwatch](http://nightwatchjs.org) Tool supports UI automated testing framework powered by [Node.js](http://nodejs.org/). It uses the [Selenium WebDriver API](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol).

***

#### [Homepage](http://nightwatchjs.org) | [Getting Started](http://nightwatchjs.org/getingstarted) | [Developer Guide](http://nightwatchjs.org/guide) | [API Reference](http://nightwatchjs.org/api) | [Changelog](https://github.com/nightwatchjs/nightwatch/releases)

This repository contains simple tests that uses nightwatch and runs them both locally and in cloud based environment such as Sauce Labs. Only the functional tests are included here. The tests are very basic as the main emphasis is to configure the various environments (browser, OS etc) and access the elements within the shadow DOM.

## Pre-requisites

* A Bourne-compatible shell, like bash or zsh (or knowledge to execute equivalent commands in your environment)
* [Git](http://gitscm.com/)
* [Node 0.10+](http://nodejs.org/)
* A [free Sauce Labs Automate trial account](https://saucelabs.com/signup/trial)

# Setup

Create a local repository to execute the test code
```
$ git clone git@github.com:GannettDigital/universal-web-user-tests.git
$ cd universal-web-user-tests/uw-video
```

This setup installs all npm packages with local dependencies. Alternately some packages like grunt etc can be installed globally as well. In such a case the configuration files like `package.json` or `Gruntfile.js` needs update.

Install the current version of NightwatchJS in global scope as follows:
```
$ npm install -g nightwatch
```

Install all dependent packages as follows:
```
$ npm install
```

# Running Tests

There are several ways to run the tests. For example only the unit tests can be exeucted using the Intern Client task as follows:
```
$ nightwatch [--env <env-name>] [--tag <tag-name>]
```
Both the above parameters are optional. The default environemnt will be used and all tests will be executed in absence of any parameters. At the moment only Android platform is configured for Sauce Labs based testing. The default environment runs the test in local desktop environment with Chrome browser. Custom environments can be configured in the `nightwatch.json` file so that the existing test files can be executed. The tests can be filtered using the tags that match with the test files.

Multithreading of tests are also allowed - more details are available here: http://nightwatchjs.org/guide#running-tests.

# Running Tests locally

The same test files can be excuted locally through the selenium server. The current configuration automatically starts the selenium server and launches the desired browser based on the selected environment.

Here is the command to run the tests locally for the environment selected in `nightwatch.json` file:
```
$ nightwatch --env <local-env-name> [--tag <tag-name>]
```
The selenium server starts before testing commence and terminated upon completion. No additional user action is necessary to achieve this.

# Writing tests

For developing tests, nightwatchjs has a few examples listed under their guide, for further examples, refer to the `tests` folder in this repository.

http://nightwatchjs.org/guide

## Discuss

The [Mailing List/Google Group](https://groups.google.com/forum/#!forum/nightwatchjs) is the most appropriate tool for Nightwatch related discussions. In addition, there is a [StackOverflow Nightwatch.js tag](http://stackoverflow.com/questions/tagged/nightwatch.js) at your disposal and [Twitter](https://twitter.com/nightwatchjs).

## Setup Guides

Specific WebDriver setup guides can be found on the [Docs website](http://nightwatchjs.org/getingstarted#browser-drivers-setup). Legacy Selenium drivers setup guides along with debugging instructions can be found on the [Wiki](https://github.com/nightwatchjs/nightwatch/wiki).
