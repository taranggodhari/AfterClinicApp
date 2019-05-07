System.register(["@angular/core", "@angular/router", "../dailyinformations.service", '../../authentication/authentication.service'], function(exports_1, context_1) {
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
    var core_1, router_1, dailyinformations_service_1, authentication_service_1;
    var CreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dailyinformations_service_1_1) {
                dailyinformations_service_1 = dailyinformations_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            CreateComponent = (function () {
                function CreateComponent(_router, _dailyInformationsService, _authenticationService) {
                    this._router = _router;
                    this._dailyInformationsService = _dailyInformationsService;
                    this._authenticationService = _authenticationService;
                    this.dailyinformation = {};
                    this.user = _authenticationService.getLoggedInUser();
                }
                CreateComponent.prototype.create = function () {
                    var _this = this;
                    this.dailyinformation.creator = this.user;
                    console.log(this.dailyinformation);
                    this._dailyInformationsService
                        .create(this.dailyinformation)
                        .subscribe(function (createdDailyInformation) { return _this._router.navigate(["/dailyinformations", createdDailyInformation._id]); }, function (error) { return (_this.errorMessage = error); });
                };
                CreateComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dailyInformationsService.getNurses().subscribe(function (nurses) { return (_this.nurses = nurses); }, function (error) { return (_this.errorMessage = error); });
                    ;
                    console.log(this.nurses);
                };
                CreateComponent = __decorate([
                    core_1.Component({
                        selector: "create",
                        templateUrl: "app/dailyinformations/create/create.template.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, dailyinformations_service_1.DailyInformationsService, authentication_service_1.AuthenticationService])
                ], CreateComponent);
                return CreateComponent;
            }());
            exports_1("CreateComponent", CreateComponent);
        }
    }
});
//# sourceMappingURL=create.component.js.map