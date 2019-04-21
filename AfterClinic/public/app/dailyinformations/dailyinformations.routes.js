System.register(['./dailyinformations.component', './create/create.component', './list/list.component', './view/view.component', './edit/edit.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dailyinformations_component_1, create_component_1, list_component_1, view_component_1, edit_component_1;
    var DailyInformationsRoutes;
    return {
        setters:[
            function (dailyinformations_component_1_1) {
                dailyinformations_component_1 = dailyinformations_component_1_1;
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
            exports_1("DailyInformationsRoutes", DailyInformationsRoutes = [{
                    path: 'dailyinformations',
                    component: dailyinformations_component_1.DailyInformationsComponent,
                    children: [
                        { path: '', component: list_component_1.ListComponent },
                        { path: 'create', component: create_component_1.CreateComponent },
                        { path: ':dailyinformationId', component: view_component_1.ViewComponent },
                        { path: ':dailyinformationId/edit', component: edit_component_1.EditComponent }
                    ],
                }]);
        }
    }
});
//# sourceMappingURL=dailyinformations.routes.js.map