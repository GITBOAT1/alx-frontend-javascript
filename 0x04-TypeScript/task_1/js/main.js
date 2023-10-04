var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience) {
        this.otherAttributes = {};
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        this.yearsOfExperience = yearsOfExperience;
    }
    // Add a new attribute to the object
    Teacher.prototype.addAttribute = function (attributeName, attributeValue) {
        this.otherAttributes[attributeName] = attributeValue;
    };
    // Get the value of an attribute
    Teacher.prototype.getAttribute = function (attributeName) {
        return this.otherAttributes[attributeName];
    };
    return Teacher;
}());
function printTeacher(firstName, lastName) {
    var firstInitial = firstName.charAt(0).toUpperCase();
    var fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return "".concat(firstInitial, ". ").concat(fullLastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
