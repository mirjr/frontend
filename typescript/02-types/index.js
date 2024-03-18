// TypeScript Array Type
var skills = [];
skills = ["javaScript", "Python"];
var anyArr;
anyArr = [98, "june", 15, "06", "tiger"];
var newArr; // union
newArr = [98, "june", 15, "06", "tiger", true];
var user;
user = {
    name: "Ali",
    age: 22,
    skils: {
        programming: ["JavaScript", "React JS", "Next JS"],
        bio: ["Autodock", "Autodock Vina"],
    },
};
var user2 = {
    name: "Vali",
    age: 25,
    skills: {
        programming: ["python", "java"],
        bio: ["pymol", "vmd"],
    },
};
var x; // type 10
x = 10;
// Tuple
var tree;
tree = ["banana", 5];
var y;
y = [10, 20];
var rgb = [255, 255, 255];
// console.log(rgb[0]);
// Optional Tuple Elements
var bgColor;
var headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
// TypeScript Enum
var ROLES;
(function (ROLES) {
    ROLES[ROLES["USER"] = 10] = "USER";
    ROLES[ROLES["MODERATOR"] = 11] = "MODERATOR";
    ROLES[ROLES["ADMIN"] = 12] = "ADMIN";
    ROLES[ROLES["OWNER"] = 13] = "OWNER";
})(ROLES || (ROLES = {}));
var Month;
(function (Month) {
    Month[Month["Jan"] = 1] = "Jan";
    Month[Month["Feb"] = 2] = "Feb";
    Month[Month["Mar"] = 3] = "Mar";
    Month[Month["Apr"] = 4] = "Apr";
    Month[Month["May"] = 5] = "May";
    Month[Month["Jun"] = 6] = "Jun";
    Month[Month["Jul"] = 7] = "Jul";
    Month[Month["Aug"] = 8] = "Aug";
    Month[Month["Sep"] = 9] = "Sep";
    Month[Month["Oct"] = 10] = "Oct";
    Month[Month["Nov"] = 11] = "Nov";
    Month[Month["Dec"] = 12] = "Dec";
})(Month || (Month = {}));
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
// TypeScript union Type
var myVar;
// TypeScript String Literal Types
var mouseEvent;
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
var input;
input = 10;
input = "10";
var value;
value = { name: "Ali", age: 44 };
// TypeScript never Type
function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}
var neverOccur = function () {
    throw new Error("Never!");
};
var userRoles = ["admin", "user"];
userRoles.push("admin");
userRoles.push("admin");
userRoles.push("admin");
userRoles.push("admin");
console.log(userRoles);
