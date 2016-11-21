"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
//import {COUNTRIES} from "./country.contacts";
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
//@Injectable() specifies class is available to an injector for instantiation and an injector will display an error when trying to instantiate a class that is not marked as @Injectable()
var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/ggk/countries';
    }
    CountryService.prototype.getCountries = function () {
        var _this = this;
        return this.http.get('http://127.0.0.1:8080/ggk/countries')
            .map(function (data) { return data.json(); })
            .subscribe(function (data) {
            //this.country =  console.log(data);			
            _this.country = data;
        }, function (err) { return console.log(err); }, // error
        function () { return console.log('country Complete'); } // complete
         // complete
        );
    };
    CountryService.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    CountryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CountryService);
    return CountryService;
}());
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map