module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    // Create a new Customer
    app.post("/users", users.create);

    app.get("/users/:userId", users.findOne);
    
    app.get("/users", users.findAll);

    app.put("/users/:userId", users.update);

    app.delete("/users/:userId", users.delete);

    app.delete("/users", users.deleteAll);
  };