const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("../components/user/Controller");
const { checkTokenWeb } = require("../middle/Authen");

/* GET home page. */
// http://localhost:3000/
// hien thi trang chu
router.get("/", [checkTokenWeb], function (req, res, next) {
    res.render("index");
});

// http://localhost:3000/login
router.get("/login", [checkTokenWeb], function (req, res, next) {
    res.render("user/login");
});

// http://localhost:3000/login
// xử lý login
// success => home page
// failure => login page
router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await userController.login(email, password);
        if (result) {
            // tao token
            const token = jwt.sign({email, password}, "secret", { expiresIn: '1h' });
            console.log(token);
            req.session.token = token;
            return res.redirect("/");
        } else {
            return res.redirect("/login");
        }
    } catch (error) {
        return res.redirect("/login");
    }
});

// http://localhost:3000/logout
// xử lý logout
// xoa token trong session
// chuyen qua trang login
router.get("/logout", [checkTokenWeb], async (req, res, next) => {
    try {
        req.session.destroy();
        return res.redirect("/login");
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;

/**
 * req, res, next
 * req: request yêu cầu từ client lên server
 *  - req.query: Lấy dữ liệu từ url
 *  http://localhost:3000/?name=abc&age=18
 *  - req.params: Lấy dữ liệu từ url
 *  http://localhost:3000/abc/1/2/3
 *  - req.body: Lấy dữ liệu từ form
 * res: response trả về từ server về client
 *  - res.render: Render ra file html (WEB)
 *  - res.json: Trả về dữ liệu dạng json (API)
 *  - res.send: Trả về dữ liệu dạng text (API)
 *  - res.redirect: Chuyển hướng trang
 *  - res.download: Tải file về
 * next: Hàm tiếp theo
 *
 */

/**
 * HTTP Request Methods
 * GET: Lấy dữ liệu từ server (Url + Enter)
 * POST: Gửi dữ liệu lên server (Form)
 */
