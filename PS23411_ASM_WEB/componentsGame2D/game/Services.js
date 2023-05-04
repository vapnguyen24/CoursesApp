const playerModel = require("./Model");

const login = async (username, password) => {
    try {
        let player = await playerModel.findOne({ username });
        if (player && player.password == password) {
            return player;
        }
    } catch (error) {
        console.log("Player services login error: " + error);
    }
    return null;
};

const register = async (username, password, score, otp, position) => {
    try {
        let player = await playerModel.findOne({ username });
        if (player) return false;

        player = new playerModel({
            username,
            password,
            score,
            otp,
            position,
        });
        await player.save();
        return true;
    } catch (error) {
        console.log("Player services register error:" + error);
    }
    return false;
};

const saveScore = async (username, score) => {
    try {
        const player = await playerModel.findOne({ username });
        if (player) {
            player.score = score ? score : player.score;
            await player.save();
            return true;
        }
    } catch (error) {
        console.log("Player services save error:" + error);
    }
    return false;
};

const savePosition = async (username, positionX, positionY, positionZ) => {
    try {
        const player = await playerModel.findOne({ username });
        if (player) {
            player.position.x = positionX ? positionX : player.position.x;
            player.position.y = positionY ? positionY : player.position.y;
            player.position.z = positionZ ? positionZ : player.position.z;
            await player.save();
            return true;
        }
    } catch (error) {
        console.log("Player services save error:" + error);
    }
    return false;
};

const changePassword = async (username, oldpassword, newpassword) => {
    try {
        const player = await playerModel.findOne({ username});
        if (player && player.password == oldpassword) {
            player.password = newpassword ? newpassword : player.password;
            await player.save();
            return true;
        }
    } catch (error) {
        console.log('Player services change password error: ' + error);
    }
    return false;
};

const getLeaderboard = async () => {
    try {
        const data = await playerModel.find();
        let newdata = [];
        // Pass a function to map
        data.map(item => {
            newdata.push({
            username: item.username,
            score: item.score
            })  
        });
        return newdata;
    } catch (error) {
        console.log('player service getLeaderboard error: ' + error);
    }
    return null;
}

module.exports = { login, register, saveScore, 
    savePosition, changePassword, getLeaderboard };
