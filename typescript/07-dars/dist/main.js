"use strict";
// Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function renderHtml(pacedId, addHtml) {
    return (target) => {
        let list = new target();
        document.getElementById(pacedId).innerHTML = addHtml(list);
    };
}
let ListItem = class ListItem {
    constructor() {
        this.itemType = "Decorators added";
    }
};
ListItem = __decorate([
    renderHtml("box", (target) => `<h1>${target.itemType}</h1>`)
], ListItem);
