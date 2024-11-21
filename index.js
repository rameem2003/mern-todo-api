const express = require("express");
const app = express();
const Todo = require("./models/todo.model");
require("./config/mongo.config");

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// default route
app.get("/", (req, res) => {
  res.send("Welcome to Republic of Legends Server");
});

// get all todo
app.get("/todos", async (req, res) => {
  try {
    let todos = await Todo.find();

    if (todos.length > 0) {
      res.status(200).send(todos);
    } else {
      res.status(404).send({ msg: "Todo List is Empty" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
});

// get single todo
app.get("/todos/getone/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let todo = await Todo.findOne({ _id: id });

    res.status(200).send({ msg: "Todo Found", data: todo });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
});

// add new todo
app.post("/todos/add", async (req, res) => {
  const { task } = req.body;

  try {
    const newTodo = new Todo({ task });

    let todo = await newTodo.save();

    res.status(201).send({
      msg: "A New TODO Created",
      data: todo,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
});

// update a todo
app.patch("/todos/update/:id", async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    let todo = await Todo.findOneAndUpdate(
      { _id: id },
      { task },
      { new: true }
    );

    res.status(200).send({
      msg: "TODO is Updated",
      data: todo,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error", error });
  }
});

// delete a todo
app.delete("/todos/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let todo = await Todo.deleteOne({ _id: id });
    res.status(200).json({
      msg: `Todo Delete Successful id ${id}`,
    });
  } catch (error) {
    res.status(404).send({ msg: "Todo Not Found" });
  }
});

// start server
app.listen(8000, () => {
  let data = {
    msg: "Welcome to Republic of Legends Server",
    serverip: "http://localhost:8000",
  };
  console.log(data);
});
