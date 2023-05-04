const playerService = require("./Services");
const playerModel = require("./Model");

const mailer = require("nodemailer");

const transporter = mailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
        user: "vinh2000thanh@gmail.com",
        pass: "dwcyffrnozbnxocg",
    },
});

const login = async (username, password) => {
    try {
        return await playerService.login(username, password);
    } catch (error) {
        console.log("Player controller login error:" + error);
    }
    return null;
};

const register = async (username, password, score, otp, position) => {
    try {
        return await playerService.register(
            username,
            password,
            score,
            otp,
            position
        );
    } catch (error) {
        console.log("Player controller register error:" + error);
    }
    return false;
};

const saveScore = async (username, score) => {
    try {
        return await playerService.saveScore(username, score);
    } catch (error) {
        console.log("Player controller save error:" + error);
    }
    return false;
};

const savePosition = async (username, positionX, positionY, positionZ) => {
    try {
        return await playerService.savePosition(
            username,
            positionX,
            positionY,
            positionZ
        );
    } catch (error) {
        console.log("Player controller save error:" + error);
    }
    return false;
};

const changePassword = async (username, oldpassword, newpassword) => {
    try {
        return await playerService.changePassword(
            username,
            oldpassword,
            newpassword
        );
    } catch (error) {
        console.log("Player controller change password error: " + error);
    }
    return false;
};

const getLeaderboard = async () => {
    try {
        return await playerService.getLeaderboard();
    } catch (error) {
        console.log("player controllerẻ getLeaderboard error: " + error);
    }
    return null;
};

const sendMail = async (to, username) => {
    try {
        const subject = "Reset tài khoản";
        const num = Math.floor(Math.random() * (9999 - 1000) + 1000);
        const content = `
        <h2>Mã xác thực của bạn là: ${num}</h2>
    `;
        const player = await playerModel.findOne({ username });

        if (player) {
            player.otp = num ? num : player.otp;
            await player.save();
        }

        const mailOptions = {
            from: "Vinh Thanh <vinh2000thanh@gmail.com>",
            to,
            subject,
            html: content,
        };
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.log("User controller send mail error: " + error);
    }
    return false;
};

const resetPassword = async (username, otp, newpassword) => {
    try {
        const player = await playerModel.findOne({username});
        if (player) {
            if (player.otp != otp) return false;
            player.password = newpassword ? newpassword : player.password;
            await player.save();
        }
        return true;
    } catch (error) {
        console.log("Player controller reset password error:" + error);
    }
    return false;
};

module.exports = {
    register,
    login,
    saveScore,
    savePosition,
    changePassword,
    getLeaderboard,
    sendMail,
    resetPassword,
};
