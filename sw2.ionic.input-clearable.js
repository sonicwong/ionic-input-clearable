angular.module('sw2.ionic.input-clearable', [])

    .provider('ionicInputClearableConfig', function() {

        this.defaultDisplayType = "filled";

        this.$get = function () {
            return this;
        };
    })

    /**
     * ionicInputClearable might have 3 values :
     - always (the button is always visible even if it's empty)
     - focused (the button appear when the field is focused and filled)
     - [default] filled (the button appear when the field is filled)
     */
    .directive('ionicInputClearable', ["$compile", "$timeout", function ($compile, $timeout) {
        return {
            restrict: 'A',
            scope: {
                ngModel: '='
            },
            controller: [   "$scope", "$element", "$attrs", "ionicInputClearableConfig",
                function ($scope, $element, $attrs, ionicInputClearableConfig) {

                var displayType = ($attrs.ionicInputClearable.length > 0 ? $attrs.ionicInputClearable : ionicInputClearableConfig.defaultDisplayType);
                var element = $element[0];

                //Parent element should be position:relative to make clear button in correct positon
                $element.parent().css( "position", "relative" );
                
                //ng-hide class used to fix init flash problem
                $scope.clearBtn = angular.element('<a tabindex="-1" ng-cloak class="ng-hide input-clear-btn button button-icon icon ion-close" ng-click="clearInputField( $event )" ng-hide="isInputFieldEmpty()"></a>');
                $compile($scope.clearBtn)($scope);
                $element.after($scope.clearBtn);
                
                $scope.clearInputField = function ( event ) {
                    $scope.ngModel = '';

                    function preventBluring() {
                        element.focus();
                        $element.unbind( 'blur', preventBluring );
                    }

                    //keep focus on the field when click on the clear button
                    $element.bind( 'blur' , preventBluring );
                };

                function refresh() {
                    $timeout( function () {
                        $scope.$digest();
                    });

                }

                $element.bind( 'focus', refresh );
                $element.bind( 'blur', refresh );

                $scope.isInputFieldEmpty = function () {

                    switch ( displayType ) {
                        case "always"   :
                            return false;
                        case "focused"  :
                            return (document.activeElement !== element || element.value == '' || element.value == null );
                        default :
                            return (element.value == '' || element.value == null);
                    }
                }
            }]
        }
    }]);