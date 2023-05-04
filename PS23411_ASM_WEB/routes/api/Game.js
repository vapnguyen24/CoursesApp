const express = require("express");
const router = express.Router();
const playerController = require("../../componentsGame2D/game/Controller");

// http://localhost:3000/api/game/register
router.post("/register", async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const player = await playerController.register(
            username,
            password,
            -1,
            0,
            {
                x: "",
                y: "",
                z: "",
            }
        );

        if (player) {
            return res.status(200).json({
                status: 1,
                notification: "Đăng ký tài khoản thành công",
            });
        }
        return res
            .status(200)
            .json({ status: 0, notification: "Tài khoản đã tồn tại" });
    } catch (error) {
        return res.status(500).json({
            status: 0,
            notification: "Đăng ký tài khoản không thành công",
        });
    }
});

// http://localhost:3000/api/game/login
router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const player = await playerController.login(username, password);

        if (player) {
            return res.status(200).json({
                status: 1,
                notification: "Đăng nhập thành công",
                username: player.username,
                score: player.score,
                positionX: player.position.x,
                positionY: player.position.y,
                positionZ: player.position.z,
            });
        }
        return res
            .status(200)
            .json({ status: 0, notification: "Đăng nhập không thành công" });
    } catch (error) {
        return res
            .status(500)
            .json({ status: 0, notification: "Đăng nhập không thành công" });
    }
});

// http://localhost:3000/api/game/save-score
router.post("/save-score", async (req, res, next) => {
    try {
        const { username, score } = req.body;
        const status = await playerController.saveScore(username, score);
        if (status) {
            return res
                .status(200)
                .json({ notification: "Lưu thành công", status: 1 });
        }
        return res
            .status(400)
            .json({ notification: "Không tìm thấy tài khoản", status: 0 });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ status: false });
    }
});

// http://localhost:3000/api/game/save-position
router.post("/save-position", async (req, res, next) => {
    try {
        const { username, positionX, positionY, positionZ } = req.body;
        const status = await playerController.savePosition(
            username,
            positionX,
            positionY,
            positionZ
        );
        if (status) {
            return res
                .status(200)
                .json({ notification: "Lưu vị trí thành công", status: 1 });
        }
        return res
            .status(400)
            .json({ notification: "Không tìm thấy tài khoản", status: 0 });
    } catch (error) {
        console.log(error);
        return res.status[500].json({ status: false });
    }
});

// http://localhost:3000/api/game/change-password
router.post("/change-password", async (req, res, next) => {
    try {
        const { username, oldpassword, newpassword } = req.body;
        if (newpassword == "") {
            return res
                .status(200)
                .json({ notification: "Nhập đầy đủ thông tin", status: 1 });
        }
        const status = await playerController.changePassword(
            username,
            oldpassword,
            newpassword
        );
        if (status) {
            return res
                .status(200)
                .json({ notification: "Đổi mật khẩu thành công", status: 1 });
        }
        return res
            .status(400)
            .json({ notification: "Không tìm thấy tài khoản", status: 0 });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false });
    }
});

// http://localhost:3000/api/game/list
router.get("/list", async (req, res, next) => {
    try {
        const data = await playerController.getLeaderboard();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false });
    }
});

// http://localhost:3000/api/game/send-otp
router.post("/send-otp", async (req, res, next) => {
    try {
        const { username } = req.body;
        const status = await playerController.sendMail(username, username);

        if (status) {
            return res
                .status(200)
                .json({ status: 1, notification: "Gửi OTP thành công" });
        }
        return res
            .status(400)
            .json({ status: 0, notification: "Gửi OTP không thành công" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false });
    }
});

// http://localhost:3000/api/game/reset-password
router.post("/reset-password", async (req, res, next) => {
    try {
        const { username, otp, newpassword } = req.body;
        const status = await playerController.resetPassword(
            username,
            otp,
            newpassword
        );

        if (status) {
            return res
                .status(200)
                .json({ notification: "Đổi mật khẩu thành công", status: 1 });
        }
        return res
            .status(400)
            .json({ notification: "Đổi mật khẩu không thành công", status: 1 });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false });
    }
});
module.exports = router;
