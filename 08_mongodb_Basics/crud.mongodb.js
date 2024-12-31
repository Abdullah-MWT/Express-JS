use("CrudDb");

// This is how we use Create of ( CRUD ) to create and insert data
db.createCollection("courses");

db.courses.insertOne({
    "Name": "Abdullah",
    "Price": 15000,
    "Instructor": "Web_Dev"
})

// Now let's insert many as well

db.courses.insertMany([
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
  )


  // This is how we use READ of ( CRUD ) to read/Find the data

  let a = db.courses.find({"Price": 15000});
  console.log(a);

  // This wil tell us how many documents are there in the collection
  console.log(a.count());


  // This is how we will use UPDATE of ( CRUD ) to update the data

  db.courses.updateMany({Price: 15000}, {$set:{Price: 18000}});

  // This is how we will use DELETE of ( CRUD ) to delete the data

  db.courses.deleteOne({Price: 18000})
  
  