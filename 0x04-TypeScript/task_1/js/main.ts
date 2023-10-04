class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;
  private otherAttributes: {[key: string]: any} = {};

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsOfExperience = yearsOfExperience;
  }

  // Add a new attribute to the object
  addAttribute(attributeName: string, attributeValue: any) {
    this.otherAttributes[attributeName] = attributeValue;
  }

  // Get the value of an attribute
  getAttribute(attributeName: string): any {
    return this.otherAttributes[attributeName];
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstInitial}. ${fullLastName}`;
}

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
