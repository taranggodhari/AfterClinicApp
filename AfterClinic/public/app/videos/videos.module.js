System.register(['@angular/core', '@angular/common', '@angular/router', './videos.routes', './SafePipe', './videos.component'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, videos_routes_1, SafePipe_1, videos_component_1;
    var VideosModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (videos_routes_1_1) {
                videos_routes_1 = videos_routes_1_1;
            },
            function (SafePipe_1_1) {
                SafePipe_1 = SafePipe_1_1;
            },
            function (videos_component_1_1) {
                videos_component_1 = videos_component_1_1;
            }],
        execute: function() {
            VideosModule = (function () {
                function VideosModule() {
                }
                VideosModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            router_1.RouterModule.forChild(videos_routes_1.VideosRoutes),
                        ],
                        declarations: [
                            videos_component_1.VideosComponent,
                            SafePipe_1.SafePipe
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VideosModule);
                return VideosModule;
            }());
            exports_1("VideosModule", VideosModule);
        }
    }
});
//# sourceMappingURL=videos.module.js.map