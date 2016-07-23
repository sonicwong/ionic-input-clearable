ionic-input-clearable
=====================

> A Ionic directive for a clearable input field.

#Table of contents

- [Demo](#demo)
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Ionic compatibility](#ionic-compatibility)
- [Usage](#usage)
- [License](#license)

# Demo

See it in action in the following image:

![demo](https://github.com/sonicwong/ionic-input-clearable/raw/master/demo.gif)

# Introduction

For one of my private projects I needed a clearable input field component in Ionic (just same as jquery mobile one). I searched a lot and found some plain Angular clearable input field, but these had too much other dependencies and mostly didn't look that good within Ionic. Then . So I spent some time to create my first ionic directive.

# Features

The ionic-input-clearable component has the following features:
- add clear button on the right side of the input field

# Installation

Import the `ionic-input-clearable` javascript and css file into your HTML file:
```html
<script src="sw2.ionic.input-clearable.js"></script>
<link href="sw2.ionic.input-clearable.css" rel="stylesheet">
```
Add `sw2.ionic.input-clearable` as a dependency on your Ionic app:
```javascript
angular.module('myApp', [
  'ionic',
  'sw2.ionic.input-clearable'
]);
```

# Ionic compatibility

Tested on Ionic version 1.3.1

# Usage

To use the `ionic-input-clearable` directive you need set add `ionic-input-clearable` attribute to input field:
```html
<input ng-model="searchkey" type="text" ionic-input-clearable />
```

REMARK: In order to let the clear button is clickable, please use "div" instead of "label" to wrap your input field.

# Options

Add attribute "data-hideClearBtnOnBlur": hide the clear button when INPUT is blur.
```html
<input ng-model="searchkey" type="text" ionic-input-clearable data-hideClearBtnOnBlur />
```

# Version

v1.0.1 (2016-07-24)

1. Add option for hide clear button on blur (same as ios style). (thanks: mopi1402)

2. Bug fix for determine if element value is element. (thanks: mopi1402)

3. Add CSS fade in/out effect to cancel button.

v1.0.0 (2016-07-19)

1. Initial release

# License

This Ionic clearable directive is available under the MIT license.

(c) sw2sonic | sw2hk.com
