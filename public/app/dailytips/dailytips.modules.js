System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/router', './dailytips.routes', './dailytips.component', './create/create.component', './list/list.component', './view/view.component', './edit/edit.component'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, router_1, dailytips_routes_1, dailytips_component_1, create_component_1, list_component_1, view_component_1, edit_component_1;
    var DailyTipsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dailytips_routes_1_1) {
                dailytips_routes_1 = dailytips_routes_1_1;
            },
            function (dailytips_component_1_1) {
                dailytips_component_1 = dailytips_component_1_1;
            },
            function (create_component_1_1) {
                create_component_1 = create_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (view_component_1_1) {
                view_component_1 = view_component_1_1;
            },
            function (edit_component_1_1) {
                edit_component_1 = edit_component_1_1;
            }],
        execute: function() {
            DailyTipsModule = (function () {
                function DailyTipsModule() {
                }
                DailyTipsModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forChild(dailytips_routes_1.DailyRoutesRoutes),
                        ],
                        declarations: [
                            dailytips_component_1.DailyTipsComponent,
                            create_component_1.CreateComponent,
                            list_component_1.ListComponent,
                            view_component_1.ViewComponent,
                            edit_component_1.EditComponent,
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DailyTipsModule);
                return DailyTipsModule;
            }());
            exports_1("DailyTipsModule", DailyTipsModule);
        }
    }
});
//# sourceMappingURL=dailytips.modules.js.map