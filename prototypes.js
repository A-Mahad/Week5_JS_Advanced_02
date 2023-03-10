// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
  
  Person.prototype.speak = function() {
    console.log(`Hello, My name is ${this.name} and I'm ${this.age} years old. I love ${this.hobby}.`);
  }

// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results


const Me = new Person("Ahmed", 30, "Reading Quran");
Me.speak(); // Hi, my name is John and I'm 30 years old.
