function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty("marks"))   {
  this.marks = [...this.marks, ...marks];
    } 
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty("marks") && this.marks.length) {
      return (this.marks.reduce((acc, val) => acc + val, 0)) / this.marks.length;
    } else {
      return 0
    }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  if(this.hasOwnProperty("excluded")) {
    delete this.marks;
    delete this.subject;
  }
}
