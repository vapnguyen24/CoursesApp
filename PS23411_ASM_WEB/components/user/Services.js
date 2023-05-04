const userModel = require("./Model");
const productModel = require("../product/Model");
const productServices = require("../product/Services");
const bcrypt = require('bcryptjs');
// kieu tra data tren db
// neu co return user, else return null
const login = async (email, password) => {
    try {
        let user = await userModel.findOne({ email });
        if (user) {
            const isMatch = bcrypt.compareSync(password, user.password);
            return isMatch ? user: false;
        }
    } catch (error) {
        console.log("User service login error: ", error);
        throw error;
    }
};

const register = async (email, password, name, image, address, phone, cash, myasm) => {
    try {
        let user = await userModel.findOne({ email });

        if (user) return false;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        user = new userModel({
            email,
            password: hash,
            name,
            image,
            address,
            phone,
            cash,
            myasm
        });
        await user.save();
        return true;
    } catch (error) {
        console.log("User service register error: ", error);
    }
    return false;
};

const update = async (email, name, image, address, phone) => {
    try {
        let user = await userModel.findOne({ email });
        if (user) {
            user.name = name ? name : user.name;
            user.image = image ? image : user.image;
            user.address = address ? address : user.address;
            user.phone = phone ? phone : user.phone;
            await user.save();
            return true;
        }
    } catch (error) {
        console.log("User service update error: ", error);
    }
    return false;
}

const getAll = async () => {
    try {
        return await userModel.find();
    } catch (error) {
        console.log('User service getAll error: ', error);
    }
}

const getInfor = async (id) => {
    try {
        let user = await userModel.findById(id);
        return user;
    } catch (error) {
        console.log("User service getInfor error: ", error);
    }
    return null;
};

//thanh toan

const checkOut = async (id, _id) => {
    try {
        const user = await userModel.findById(id);
        if (user) {
            const product = await productModel.findById(_id).populate('category', 'name');
            console.log(product);
            if (product) {

                const myProduct = {
                    _id: product._id,
                    name: product.name,
                    image: product.image,
                    category: product.category.name,
                    price: product.price,
                    describe: product.describe,
                    source: product.source
                }

                user.myasm.push(myProduct);
                await user.save();
                return true;
            }
        }
    } catch (error) {
        console.log("User service check out error: " + error);
    }
    return false;
}

const getMyAssignment = async (id) => {
    try {
        const user = await userModel.findById(id);
        if (user) {
            return user.myasm;
        }
    } catch (error) {
        console.log("User service get my asm error: " + error);
    }
    return null;
}

// check buy assignment
const checkBuyAssignment = async (idUser, idAsm) => {
    try {
        let item = false;
        const myAssignments = await getMyAssignment(idUser);
        if (myAssignments) {
            myAssignments.map(assignment => {
                if (assignment._id.toString() == idAsm.toString()) {
                    item = true;
                    return;
                }
            })
           
        }
        return item;
    } catch (error) {
        console.log("User service buy asm error: " + error);
    }
    return false;
}
module.exports = { login, register, update, getInfor, checkOut, getMyAssignment, getAll, checkBuyAssignment };

