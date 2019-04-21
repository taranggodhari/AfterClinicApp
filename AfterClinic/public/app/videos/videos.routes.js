System.register(['./videos.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var videos_component_1;
    var VideosRoutes;
    return {
        setters:[
            function (videos_component_1_1) {
                videos_component_1 = videos_component_1_1;
            }],
        execute: function() {
            exports_1("VideosRoutes", VideosRoutes = [{
                    path: 'videos',
                    component: videos_component_1.VideosComponent,
                }]);
        }
    }
});
//# sourceMappingURL=videos.routes.js.map