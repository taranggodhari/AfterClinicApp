System.register(["@angular/core", "@angular/router", "../../authentication/authentication.service", "../vitalsigns.service"], function(exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, vitalsigns_service_1;
    var ViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (vitalsigns_service_1_1) {
                vitalsigns_service_1 = vitalsigns_service_1_1;
            }],
        execute: function() {
            ViewComponent = (function () {
                //
                function ViewComponent(_router, _route, _authenticationService, _vitalSignsService) {
                    this._router = _router;
                    this._route = _route;
                    this._authenticationService = _authenticationService;
                    this._vitalSignsService = _vitalSignsService;
                    this.allowEdit = false;
                }
                //
                ViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("Here");
                    this.user = this._authenticationService.getLoggedInUser();
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var vitalsignId = params["vitalsignId"];
                        _this._vitalSignsService.read(vitalsignId).subscribe(function (vitalsign) {
                            _this.vitalsign = vitalsign;
                            _this.allowEdit = _this.user && _this.user._id === _this.vitalsign.nurse._id;
                        }, function (error) { return _this._router.navigate(["/vitalsigns"]); });
                    });
                };
                //
                ViewComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                //
                ViewComponent.prototype.delete = function () {
                    var _this = this;
                    this._vitalSignsService
                        .delete(this.vitalsign._id)
                        .subscribe(function (deletedVitalSigns) { return _this._router.navigate(["/vitalsigns"]); }, function (error) { return (_this.errorMessage = error); });
                };
                ViewComponent = __decorate([
                    core_1.Component({
                        selector: "view",
                        templateUrl: "app/vitalsigns/view/view.template.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, authentication_service_1.AuthenticationService, vitalsigns_service_1.VitalSignsService])
                ], ViewComponent);
                return ViewComponent;
            }());
            exports_1("ViewComponent", ViewComponent);
        }
    }
});
//# sourceMappingURL=view.component.js.map