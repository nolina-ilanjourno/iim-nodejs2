const prisma = require("../config/prisma");

class UsersController {
  // app.get (/users)
  async index(req, res) {
    const users = await prisma.user.findMany();
    return res.status(200).send(users);
  }

  // app.post (/users)
  async store(req, res) {
    try {
      const body = req.body;
      const user = await prisma.user.create({
        data: body,
      });
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).send({
        message: e.message,
      });
    }
  }

  // app.get (/users/:id)
  async show(req, res) {
    const id = req.params.id; // 4
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (user === null) {
      return res.status(404).send("User not found");
    }

    return res.status(200).send(user);
  }

  // app.put (/users/:id)
  async update(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      let user = await prisma.user.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      if (user === null) {
        return res.status(404).send("User not found");
      }

      user = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: body,
      });

      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).send({
        message: e.message,
      });
    }
  }

  // app.delete (/users/:id)
  async destroy(req, res) {
    try {
      const id = req.params.id;

      let user = await prisma.user.findUnique({
        where: {
          id: parseInt(id),
        },
      });

      if (user === null) {
        return res.status(404).send("User not found");
      }

      await prisma.user.delete({
        where: {
          id: parseInt(id),
        },
      });

      return res.status(204).send();
      // return res.status(200).send(users);
    } catch (e) {
      return res.status(500).send({
        message: e.message,
      });
    }
  }
}

module.exports = new UsersController();
