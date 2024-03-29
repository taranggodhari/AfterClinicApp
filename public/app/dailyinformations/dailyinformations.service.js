System.register(['rxjs/Rx', 'rxjs/Observable', '@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var Observable_1, core_1, http_1;
    var DailyInformationsService;
    return {
        setters:[
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DailyInformationsService = (function () {
                function DailyInformationsService(_http) {
                    this._http = _http;
                    this._baseURL = 'api/dailyinformation';
                    this._getNursesUrl = 'api/nurses';
                }
                DailyInformationsService.prototype.create = function (dailyinformation) {
                    return this._http
                        .post(this._baseURL, dailyinformation)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DailyInformationsService.prototype.read = function (dailyinformationId) {
                    return this._http
                        .get(this._baseURL + "/" + dailyinformationId)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DailyInformationsService.prototype.update = function (dailyinformation) {
                    return this._http
                        .put(this._baseURL + "/" + dailyinformation._id, dailyinformation).map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DailyInformationsService.prototype.delete = function (dailyinformationId) {
                    return this._http
                        .delete(this._baseURL + "/" + dailyinformationId)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DailyInformationsService.prototype.list = function () {
                    return this._http
                        .post(this._baseURL + "/get", null)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DailyInformationsService.prototype.getNurses = function () {
                    return this._http
                        .post(this._getNursesUrl, null)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DailyInformationsService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error.json().message || 'Server error');
                };
                DailyInformationsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DailyInformationsService);
                return DailyInformationsService;
            }());
            exports_1("DailyInformationsService", DailyInformationsService);
        }
    }
});
//# sourceMappingURL=dailyinformations.service.js.map