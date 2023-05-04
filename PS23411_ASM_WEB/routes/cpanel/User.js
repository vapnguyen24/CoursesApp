var express = require("express");
var router = express.Router();
const userController = require("../../components/user/Controller");

// http://localhost:3000/users/user-list
router.get("/user-list", async (req, res, next) => {
    try {
        const users = await userController.getAll();
        console.log(users);
        if (users) {
            res.render("products/user-table", { users });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// http://localhost:3000/users/:id/details
router.get("/:id/details", async (req, res, next) => {
    try {
        let {id} = req.params;
        const user = await userController.getInfor(id);
        const myAssignments = await userController.getMyAssignment(id);
        if (user) {
            res.render("products/details-user", { user, myAssignments });   
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
    
});

// http://localhost:3000/users/add-news
router.get("/add-news", function (req, res, next) {
    res.render("products/add-user");
});

module.exports = router;
