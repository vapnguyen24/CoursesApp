const checkRegister = (req, res, next) => {
    const {email, password} = req.body;
    if (!email ||!password) {
        return res.status(400).json({message: 'Please provide email and password'});
    }
};

module.exports = {checkRegister}