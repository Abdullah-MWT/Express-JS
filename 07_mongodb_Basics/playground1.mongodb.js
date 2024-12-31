
// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "Python",
      "Price": 18000,
      "Instructor": "Abdullah"
    },
    {
      "name": "JavaScript",
      "Price": 15000,
      "Instructor": "Sarah"
    },
    {
      "name": "Java",
      "Price": 20000,
      "Instructor": "Michael"
    },
    {
      "name": "C++",
      "Price": 17000,
      "Instructor": "Sofia"
    },
    {
      "name": "Ruby",
      "Price": 16000,
      "Instructor": "Jake"
    },
    {
      "name": "PHP",
      "Price": 14000,
      "Instructor": "Emma"
    },
    {
      "name": "Swift",
      "Price": 19000,
      "Instructor": "Liam"
    },
    {
      "name": "Go",
      "Price": 21000,
      "Instructor": "Olivia"
    },
    {
      "name": "Kotlin",
      "Price": 17500,
      "Instructor": "Ethan"
    },
    {
      "name": "C#",
      "Price": 18500,
      "Instructor": "Mia"
    }
  ]
  );



// Print a message to the output window.
console.log(`Done inserting the Data`);

