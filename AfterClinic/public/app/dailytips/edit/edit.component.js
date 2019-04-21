System.register(["@angular/core", "@angular/router", "../dailytips.service"], function(exports_1, context_1) {
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
    var core_1, router_1, dailytips_service_1;
    var EditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dailytips_service_1_1) {
                dailytips_service_1 = dailytips_service_1_1;
            }],
        execute: function() {
            EditComponent = (function () {
                function EditComponent(_router, _route, _dailyTipsService) {
                    this._router = _router;
                    this._route = _route;
                    this._dailyTipsService = _dailyTipsService;
                    this.dailytip = {};
                }
                EditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var dailytipId = params["dailytipId"];
                        _this._dailyTipsService.read(dailytipId).subscribe(function (dailytip) {
                            _this.dailytip = dailytip;
                        }, function (error) { return _this._router.navigate(["/dailytips"]); });
                    });
                };
                EditComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                EditComponent.prototype.update = function () {
                    var _this = this;
                    this._dailyTipsService
                        .update(this.dailytip)
                        .subscribe(function (savedDailyTip) { return _this._router.navigate(["/dailytips", savedDailyTip._id]); }, function (error) { return (_this.errorMessage = error); });
                };
                EditComponent = __decorate([
                    core_1.Component({
                        selector: "edit",
                        templateUrl: "app/dailytips/edit/edit.template.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, dailytips_service_1.DailyTipsService])
                ], EditComponent);
                return EditComponent;
            }());
            exports_1("EditComponent", EditComponent);
        }
    }
});
//# sourceMappingURL=edit.component.js.map