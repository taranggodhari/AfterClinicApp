System.register(["@angular/core", "./courses.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, courses_service_1, CoursesComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            }
        ],
        execute: function () {
            CoursesComponent = /** @class */ (function () {
                function CoursesComponent() {
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: "courses",
                        templateUrl: "app/courses/courses.template.html",
                        styleUrls: ['./app/app.style.css'],
                        providers: [courses_service_1.CoursesService]
                    })
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    };
});
//# sourceMappingURL=courses.component.js.map