System.register(['@angular/core', './dailytips.service', '../authentication/authentication.service'], function(exports_1, context_1) {
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
    var core_1, dailytips_service_1, authentication_service_1;
    var DailyTipsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dailytips_service_1_1) {
                dailytips_service_1 = dailytips_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            DailyTipsComponent = (function () {
                function DailyTipsComponent(_authenticationService) {
                    this._authenticationService = _authenticationService;
                    this.user = _authenticationService.getLoggedInUser();
                }
                DailyTipsComponent = __decorate([
                    core_1.Component({
                        selector: "dailytips",
                        templateUrl: "app/vitalsigns/vitalsigns.template.html",
                        providers: [dailytips_service_1.DailyTipsService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], DailyTipsComponent);
                return DailyTipsComponent;
            }());
            exports_1("DailyTipsComponent", DailyTipsComponent);
        }
    }
});
//# sourceMappingURL=dailytips.component.js.map