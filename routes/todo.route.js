module.exports = app => {
    const tutorials = require("../controller/todo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Task
    router.post("/", tutorials.create);
  
    // Retrieve all Task
    router.get("/", tutorials.findAll);
  
    // Retrieve all done Tasks
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Task with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Task with id
    router.put("/:id", tutorials.update);
  
    // Delete a Task with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Task
    router.delete("/", tutorials.deleteAll);
  
    app.use("/api/tutorials", router);
  };