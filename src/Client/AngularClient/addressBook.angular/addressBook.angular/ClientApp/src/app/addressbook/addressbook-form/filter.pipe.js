"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterPipe = void 0;
var core_1 = require("@angular/core");
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, searchValue) {
        if (!searchValue)
            return value;
        return value.filter(function (v) {
            return v.fullName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
                v.phoneNumber.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        });
    };
    FilterPipe = __decorate([
        (0, core_1.Pipe)({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;
//# sourceMappingURL=filter.pipe.js.map