let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Fiona" },
];

class UsersController {
  // app.get (/users)
  index(req, res) {
    return res.status(200).send(users);
  }

  // app.post (/users)
  store(req, res) {
    const body = req.body;
    users.push(body);
    return res.status(201).send(users);
  }

  // app.get (/users/:id)
  show(req, res) {
    const id = req.params.id; // 4
    const user = users.find((user) => user.id === parseInt(id));

    if (user === undefined) {
      return res.status(404).send("User not found");
    }

    return res.status(200).send(user);
  }

  // app.put (/users/:id)
  update(req, res) {
    const id = req.params.id;
    const body = req.body;

    let user = users.find((user) => user.id === parseInt(id));

    if (user === undefined) {
      return res.status(404).send("User not found");
    }

    user = body;

    return res.status(200).send(user);
  }

  // app.delete (/users/:id)
  destroy(req, res) {
    const id = req.params.id;

    const user = users.find((user) => user.id === parseInt(id));

    if (user === undefined) {
      return res.status(404).send("User not found");
    }

    users = users.filter((user) => user.id !== parseInt(id));

    return res.status(204);
    // return res.status(200).send(users);
  }
}

module.exports = UsersController;
