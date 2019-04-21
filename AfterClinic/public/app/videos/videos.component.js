System.register(['@angular/core', '../authentication/authentication.service', './videos'], function(exports_1, context_1) {
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
    var core_1, authentication_service_1, videos_1;
    var VideosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (videos_1_1) {
                videos_1 = videos_1_1;
            }],
        execute: function() {
            VideosComponent = (function () {
                function VideosComponent(_authenticationService) {
                    this._authenticationService = _authenticationService;
                    this.videos = [
                        new videos_1.Video('https://www.youtube-nocookie.com/embed/nUsHePihYO4', 'WARNING: THIS VIDEO WILL CHANGE YOUR LIFE! The speakers are Eric Thomas, Les Brown and Ray Lewi NZ Aesthetics'),
                        new videos_1.Video('https://www.youtube-nocookie.com/embed/KSTKheVpEq4', 'Subscribe for more motivational videos: http://bit.ly/2fNveap Music: Say Something (instrumental version) Marys song Speakers:Elliott Hulse Stephen Fry Nick Vujicic Sadhguru Shay Carl'),
                        new videos_1.Video('https://www.youtube-nocookie.com/embed/7iaLQZ73ujQ', 'Speaker - Tyrese Gibson https://www.instagram.com/tyrese/ I do not own any copyrights, all rights go to their respective owners.')
                    ];
                    //this.user = _authenticationService.user;
                    this.user = _authenticationService.getLoggedInUser();
                }
                VideosComponent = __decorate([
                    core_1.Component({
                        selector: 'videos',
                        templateUrl: './app/videos/videos.template.html'
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], VideosComponent);
                return VideosComponent;
            }());
            exports_1("VideosComponent", VideosComponent);
        }
    }
});
//# sourceMappingURL=videos.component.js.map