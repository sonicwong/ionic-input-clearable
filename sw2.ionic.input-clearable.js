/* ================================================================================
https://github.com/sonicwong/ionic-input-clearable
v1.0.2
================================================================================ */

angular.module('sw2.ionic.input-clearable', [])
    .directive('ionicInputClearable', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            scope: {
                ngModel: '='
            },
            controller: ['$scope', '$element', function ($scope, $element) {
                //Parent element should be position:relative to make clear button in correct positon
                $element.parent().css( "position", "relative" );
                
                //ng-hide class used to fix init flash problem
                $scope.clearBtn = angular.element('<button tabindex="-1" ng-cloak class="ng-hide input-clear-btn button button-icon icon ion-close" ng-click="clearInputField()" ng-hide="isInputFieldEmpty()"></button>');
                $compile($scope.clearBtn)($scope);
                $element.after($scope.clearBtn);
                
                $scope.clearInputField = function () {
                    $scope.ngModel = '';
                };

                //add blurhandler
                $scope.hideClearableOnBlur = ($element[0].hasAttribute("data-hideClearBtnOnBlur"));
                $element.bind( 'focus', function() {
                    $scope.$digest();
                });
                
                $element.bind( 'blur', function() {
                    $scope.$digest();
                });

                $scope.isInputFieldEmpty = function () {
                    return (
                        ($scope.hideClearableOnBlur && document.activeElement !== $element[0]) || $element[0].value === '' || $element[0].value === null
                    );
                };
            }]
        };
    }]);
