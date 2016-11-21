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
/* * * ./app/comments/app.component.ts * * */
// Imports
var core_1 = require('@angular/core');
var country_service_1 = require('./country.service');
var AppComponent = (function () {
    function AppComponent(commentService) {
        this.commentService = commentService;
        this.country = commentService.getCountries();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        Countries\n\t\t <ul>\n\t\t\t<li *ngFor=\"let item of country\">{{country.name}}</li>\n\t\t</ul>\n        ",
        }), 
        __metadata('design:paramtypes', [country_service_1.CountryService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map