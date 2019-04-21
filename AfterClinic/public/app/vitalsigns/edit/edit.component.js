System.register(["@angular/core", "@angular/router", "../vitalsigns.service"], function(exports_1, context_1) {
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
    var core_1, router_1, vitalsigns_service_1;
    var EditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (vitalsigns_service_1_1) {
                vitalsigns_service_1 = vitalsigns_service_1_1;
            }],
        execute: function() {
            EditComponent = (function () {
                function EditComponent(_router, _route, _vitalSignsService) {
                    this._router = _router;
                    this._route = _route;
                    this._vitalSignsService = _vitalSignsService;
                    this.vitalsign = {};
                }
                EditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var vitalsignId = params["vitalsignId"];
                        _this._vitalSignsService.read(vitalsignId).subscribe(function (vitalsign) {
                            _this.vitalsign = vitalsign;
                        }, function (error) { return _this._router.navigate(["/vitalsigns"]); });
                    });
                };
                EditComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                EditComponent.prototype.update = function () {
                    var _this = this;
                    this._vitalSignsService
                        .update(this.vitalsign)
                        .subscribe(function (savedVitalSign) { return _this._router.navigate(["/vitalsigns", savedVitalSign._id]); }, function (error) { return (_this.errorMessage = error); });
                };
                EditComponent = __decorate([
                    core_1.Component({
                        selector: "edit",
                        templateUrl: "app/vitalsigns/edit/edit.template.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, vitalsigns_service_1.VitalSignsService])
                ], EditComponent);
                return EditComponent;
            }());
            exports_1("EditComponent", EditComponent);
        }
    }
});
//# sourceMappingURL=edit.component.js.map