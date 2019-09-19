const tinify = require("tinify");
tinify.key = "dTb4Z7Q9D5WSgf3B5S2ncWhqG5snbBDr";

tinify.fromFile("./assets/images/2.png").toFile("2.png");

console.log('success')