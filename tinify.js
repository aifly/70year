const tinify = require("tinify");
tinify.key = "dTb4Z7Q9D5WSgf3B5S2ncWhqG5snbBDr";



console.log('success')
tinify.fromFile("./assets/images/1-7.png").toFile("1-8.png");
