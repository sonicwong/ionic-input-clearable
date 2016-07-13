# Inoic 1.x AngularJS Clearable Directive

An [Ionic](http://ionicframework.com/docs/components/#forms) [AngularJS](http://angularjs.org/) directive for adding a clear button inside an input element.

## How to use ionic-input-clearable

Just include `ionic-input-clearable.js`+`ionic-input-clearable.css` after angularjs (jQuery is not required).

Then you will need to make sure you require `ionicInputClearable` in your app module. That's it!
eg: www/js/app.js - angular.module('app', ['ionic', ionicInputClearable'])

Using the `ionic-input-clearable` directive is pretty simple:

```
<input type="text" ng-model="test" ionic-input-clearable />
```

## Limitations

Actually only `input` with `type="text"` are supported.

## Bugs

1) Text Input: Floating Labels --- (Label will not clear after clear button click)
2) Inset Input (No support yet)

## License.

This code is licensed under The MIT License (MIT).

## Credit

Ionic Directive Author: sw2sonic
Angularjs Directive Author: flocca (https://github.com/flocca/angular-clearable)
Original Author: Giacomo Antolini (aka Flocca)