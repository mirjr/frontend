"use strict";
function serializeJSON(value, options) {
    var _a, _b;
    const indentation = (_b = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.getIndent) === null || _b === void 0 ? void 0 : _b.call(_a);
    return JSON.stringify(value, null, indentation);
}
const user = {
    name: "Marcus Reshford",
    twitter: "marcusreshford",
};
const json = serializeJSON(user, {
    formatting: {
        getIndent: () => 2,
    },
});
console.log(json);
