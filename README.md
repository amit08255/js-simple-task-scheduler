<h1 align="center">JavaScript Simple Task Scheduler</h1>

<div align="center">
  :steam_locomotive::train::train::train::train::train:
</div>
<div align="center">
  <strong>A NodeJS project</strong>
</div>
<div align="center">
  A simple script which allows you to schedule an array of functions for execution.
</div>

<br />

<div align="center">
  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square"
      alt="API stability" />
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.com">
    <img src="https://img.shields.io/npm/v/choo.svg?style=flat-square"
      alt="NPM version" />
  </a>
  <!-- Standard -->
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Standard" />
  </a>
</div>

<div align="center">
  <sub>The little script is designed ❤︎ by
  <a href="https://twitter.com/amit08255">Amit Kumar</a>
</div>

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Example](#example)
- [License](#license)
- [Contact](#contact)

## Introduction
This simple script is designed to easily schedule array of functions to be executed at regular interval. The script is capable of splitting array of functions into smaller chunks and each chunk is executed parallely.

## Features
- __small:__ this script is very simple and small
- __flexible:__ the script is very flexible to be used in different projects

## Installation
1. Install NodeJS on your system.

2. Clone this repository.

3. Run below command in terminal to install all dependencies -
```sh
npm install
```

## Example
* initialize Scheduler object
```js
import Scheduler from './scheduler';
const schedule = new Scheduler();
```
* Execute function **func** with parameter **"Hello world"** every 5 seconds
```js
schedule.scheduleAt(5, func, "Hello world");
```

* Execute array of functions **func** distributing them in two groups every 5 seconds
```js
const functions = [
{
    functionObj: func, para: ["Hello world"]
},
{
    functionObj: func2, para: ["Bye bye"]
},
{
    functionObj: func3, para: ["Good boy"]
},
{
    functionObj: func4, para: ["No no"]
}
];

schedule.distributedScheduler(5, functions, 2);
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

<!-- CONTACT -->
## Contact

Amit Kumar - [@amit08255](https://twitter.com/amit08255) - amitcute3@gmail.com

Project Link: [https://github.com/amit08255/js-simple-task-scheduler](https://github.com/amit08255/js-simple-task-scheduler)

