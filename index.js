const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Fiona" },
];

app.get("/users", (req, res) => {
  return res.status(200).send(users);
});

app.post("/users", (req, res) => {
  const body = req.body;
  users.push(body);
  return res.status(201).send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id; // 4
  const user = users.find((user) => user.id === parseInt(id));

  if (user === undefined) {
    return res.status(404).send("User not found");
  }

  return res.status(200).send(user);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const user = users.find((user) => user.id === parseInt(id));

  if (user === undefined) {
    return res.status(404).send("User not found");
  }

  user = body;

  return res.status(200).send(user);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id === parseInt(id));

  if (user === undefined) {
    return res.status(404).send("User not found");
  }

  users = users.filter((user) => user.id !== parseInt(id));

  return res.status(204);
  // return res.status(200).send(users);
});

//* /users en GET = tous les utilisateurs
//* /users en POST = créer un utilisateur
//* /users/:id en GET = un utilisateur
//* /users/:id en PUT = modifier un utilisateur
// /users/:id en DELETE = supprimer un utilisateur

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
