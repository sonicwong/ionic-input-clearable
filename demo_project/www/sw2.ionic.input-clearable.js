angular.module('sw2.ionic.input-clearable', [])
    .directive('ionicInputClearable', function ($compile) {
        return {
            restrict: 'A',
            scope: {
                ngModel: '='
            },
            controller: function ($scope, $element) {
                //Parent element should be position:relative to make clear button in correct positon
                $element.parent().css( "position", "relative" );
                
                //ng-hide class used to fix init flash problem
                $scope.clearBtn = angular.element('<a tabindex="-1" ng-cloak class="ng-hide input-clear-btn button button-icon icon ion-close" ng-click="clearInputField()" ng-hide="isInputFieldEmpty()"></a>');
                $compile($scope.clearBtn)($scope);
                $element.after($scope.clearBtn);
                
                $scope.clearInputField = function () {
                    $scope.ngModel = '';
                }
                
                $scope.isInputFieldEmpty = function () {
                    return ($scope.ngModel == '' || $scope.ngModel == null);
                }
            }
        }
    })