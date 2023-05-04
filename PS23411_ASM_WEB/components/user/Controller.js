const userServices = require("./Services");

const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'vinh2000thanh@gmail.com',
        pass: 'dwcyffrnozbnxocg'
    },
});

const login = async (email, password) => {
    try {
        return await userServices.login(email, password);
    } catch (error) {
        console.log('User login error: ' + error)
    }
    return null;
};

const register = async (email, password, name, image, address, phone, cash, myasm) => {
    try {
        return await userServices.register(email, password, name, image, address, phone, cash, myasm);
    } catch (error) {
        console.log('User controller registration error: ' + error);
    }
    return false;
};

const update = async (email, name, image, address, phone) => {
    try {
        return await userServices.update(email, name, image, address, phone);
    } catch (error) {
        console.log("User controller update error: ", error);
    }
    return false;
}

const getInfor = async (id) => {
    try {
        return await userServices.getInfor(id);
    } catch (error) {
        console.log("User controller getInfor error: ", error);
    }
    return null;

};

const getAll = async () => {
    try {
        return await userServices.getAll();
    } catch (error) {
        console.log('User controller getAll error: ', error);
    }
}

const checkOut = async (id, _id) => {
    try {
        return await userServices.checkOut(id, _id);
    } catch (error) {
        console.log("User controller check out error: " + error);
    }
    return false;
}

const getMyAssignment = async (id) => {
    try {
        return await userServices.getMyAssignment(id);
    } catch (error) {
        console.log("User controller get my asm error: " + error);
    }
    return null;
}

const checkBuyAssignment = async (idUser, idAsm) => {
    try {
       return await userServices.checkBuyAssignment(idUser, idAsm);
    } catch (error) {
        console.log("User service buy asm error: " + error);
    }
    return null;
}

const sendMail = async (to, subject, content) => {
    try {
        const mailOptions = {
            from: 'Vinh Thanh <vinh2000thanh@gmail.com>',
            to,
            subject,
            html: content
        }
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.log("User controller send mail error: " + error);
    }
    return false;
}

module.exports = { login, register, update, getInfor, checkOut, getMyAssignment, getAll, checkBuyAssignment, sendMail };
