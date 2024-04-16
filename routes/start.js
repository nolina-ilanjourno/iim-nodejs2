const express = require("express");
const UsersController = require("../controllers/UsersController");

const router = express.Router();

router.get("/users", UsersController.index);
router.post("/users", UsersController.store);
router.get("/users/:id", UsersController.show);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.destroy);

module.exports = router;

//* /users en GET = tous les utilisateurs
//* /users en POST = créer un utilisateur
//* /users/:id en GET = un utilisateur
//* /users/:id en PUT = modifier un utilisateur
//* /users/:id en DELETE = supprimer un utilisateur
