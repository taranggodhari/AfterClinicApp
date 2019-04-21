System.register(["@angular/core", "../dailytips.service"], function(exports_1, context_1) {
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
    var core_1, dailytips_service_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dailytips_service_1_1) {
                dailytips_service_1 = dailytips_service_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_dailyTipsService) {
                    this._dailyTipsService = _dailyTipsService;
                }
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._dailyTipsService.list().subscribe(function (dailytips) {
                        if (JSON.stringify(dailytips) !== '[]') {
                            _this.dailytips = dailytips;
                        }
                        else {
                            _this.dailytips = null;
                        }
                    });
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: "list",
                        templateUrl: "app/dailytips/list/list.template.html"
                    }), 
                    __metadata('design:paramtypes', [dailytips_service_1.DailyTipsService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map