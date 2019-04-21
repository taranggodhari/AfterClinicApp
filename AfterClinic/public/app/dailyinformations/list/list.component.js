System.register(["@angular/core", "../dailyinformations.service", '../../authentication/authentication.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dailyinformations_service_1, authentication_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dailyinformations_service_1_1) {
                dailyinformations_service_1 = dailyinformations_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_dailyInformationsService, _authenticationService) {
                    this._dailyInformationsService = _dailyInformationsService;
                    this._authenticationService = _authenticationService;
                    this.user = _authenticationService.getLoggedInUser();
                }
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dailyInformationsService.list().subscribe(function (dailyinformations) {
                        if (JSON.stringify(dailyinformations) !== '[]') {
                            //this.dailyinformations = new Array();
                            _this.dailyinformations = dailyinformations;
                            if (_this.user.role == "PATIENT") {
                                _this.dailyinformations = [];
                                dailyinformations.forEach(function (dailyinfo, index) {
                                    if (dailyinfo.creator._id == _this.user._id) {
                                        _this.dailyinformations.push(dailyinfo);
                                    }
                                });
                                if (JSON.stringify(_this.dailyinformations) === '[]') {
                                    _this.dailyinformations = null;
                                }
                            }
                            console.log(_this.dailyinformations);
                        }
                        else {
                            _this.dailyinformations = null;
                        }
                    });
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: "list",
                        templateUrl: "app/dailyinformations/list/list.template.html"
                    }), 
                    __metadata('design:paramtypes', [dailyinformations_service_1.DailyInformationsService, authentication_service_1.AuthenticationService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map