System.register(["@angular/core", "./vitalsigns.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, vitalsigns_service_1, VitalSignsComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vitalsigns_service_1_1) {
                vitalsigns_service_1 = vitalsigns_service_1_1;
            }
        ],
        execute: function () {
            VitalSignsComponent = /** @class */ (function () {
                function VitalSignsComponent() {
                }
                VitalSignsComponent = __decorate([
                    core_1.Component({
                        selector: "vitalsigns",
                        templateUrl: "app/vitalsigns/vitalsigns.template.html",
                        providers: [vitalsigns_service_1.VitalSignsService]
                    })
                ], VitalSignsComponent);
                return VitalSignsComponent;
            }());
            exports_1("VitalSignsComponent", VitalSignsComponent);
        }
    };
});
//# sourceMappingURL=vitalsigns.component.js.map