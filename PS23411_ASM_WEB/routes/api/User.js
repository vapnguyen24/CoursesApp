var express = require("express");
var router = express.Router();
var userController = require("../../components/user/Controller");
const jwt = require('jsonwebtoken');
// http://localhost:3000/api/user/register
// dang ky
router.post("/register", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userController.register(
            email,
            password,
            'Usename' + new Date().getTime(),
            'https://cdn-icons-png.flaticon.com/512/147/147140.png', 
            'Unknown address', 
            'Unknow phone', 
            '0', []);
        console.log(user);

        

        if (user) {
            return res
                .status(200)
                .json({ result: user, notifycation: "Register Success" });
        }
        return res
            .status(400)
            .json({ result: false, notifycation: "Register failed" });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ result: false });
    }
});

// send email
// http://localhost:3000/api/user/sendemail
router.post('/sendemail', async (req, res, next) => {
    try {
        const {to, subject} = req.body;
        const num = Math.floor(Math.random() * (9999-1000) + 1000);
        const content = `
            <h1>Hello</h1>
            <h2>Mã xác thực: ${num}</h2>
        `;

        const result = await userController.sendMail(to, subject, content);
        if (result)
        {
            return res.status(200).json( {result: true, code: num} );
        }
    } catch (error) {
        console.log(error);
        return res.status[500].json({ result: false });
    }
})

// http://localhost:3000/api/user/login
// dang nhap
router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userController.login(email, password);
        if (user) {
            let token = jwt.sign({}, 'secret', {expiresIn: 1 * 60 * 60});
            const _user = {
                _id: user._id,
                name: user.name,
                image: user.image,
                email: user.email,
                address: user.address,
                phone: user.phone,
                cash: user.cash,
                myasm: user.myasm
            }
            return res.status(200).json({data: { result: true, user: _user, token: token}});
        }
        return res.status(400).json({ result: false });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ result: false });
    }
});

// http://localhost:3000/api/user/:email/update-profile
router.post("/:email/update-profile", async (req, res, next) => {
    try {
        const {email} = req.params;
        const {name, image, address, phone} = req.body;

        const result = await userController.update(email, name, image, address, phone);
        if (result) {
            return res.status(200).json({ result: true, notifycation: "Update success" });
        }
        return res.status[400].json({ result: false });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ result: false });
    }
})

// http://localhost:3000/api/user/:id/details
router.get('/:id/details', async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userController.getInfor(id);
        console.log(user);
        if (user) {
            const _user = {
                _id: user._id,
                name: user.name,
                image: user.image,
                email: user.email,
                address: user.address,
                phone: user.phone,
                cash: user.cash
            }
            return res.status(200).json({ result: true, user: _user });
        }
        return res.status(400).json({ result: false });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ result: false });
    }
});


// thanh toan
// http://localhost:3000/api/user/:idUser/checkout?id=
router.post('/:idUser/checkout/', async (req, res, next) => {
    try {
        const {id} = req.query;
        const {idUser} = req.params;
        const result = await userController.checkOut(idUser, id);
        console.log('result', result);
        if (result) {
            return res.status(200).json({ result: result, notifycation: "Checkout success" });
        }
        return res.status(400).json({ result: false });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ result: false });
    }
});

// my assignment
// http://localhost:3000/api/user/:id/my-assignments

router.get('/:id/my-assignments', async (req, res, next) => {
    try {
        const {id} = req.params;
        const myAssignments = await userController.getMyAssignment(id);
        if (myAssignments) {
            return res.status(200).json( myAssignments );
        }
        return res.status(400).json({ result: false });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ result: false });
    }
});

// check buy asm
// http://localhost:3000/api/user/:id/check-buy?idAsm=

router.get('/:id/check-buy', async (req, res, next) => {
    try {
        const {id} = req.params;
        const {idAsm} = req.query;
        const isBought = await userController.checkBuyAssignment(id, idAsm);
        console.log('isBought', isBought);
        if (isBought) {
            return res.status(200).json( {result: true} );
        }
        return res.status(400).json({ result: false });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ result: false });
    }
});


module.exports = router;
