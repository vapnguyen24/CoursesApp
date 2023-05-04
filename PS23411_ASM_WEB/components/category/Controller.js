const categoriesServices = require("./Service");

const getAllCategories = async () => {
    try {
        return await categoriesServices.getAllCategories();
    } catch (error) {
        console.log("Get all categories error: ", error);
    }
    return null;
};

const deleteCategoryById = async (id) => {
    try {
        return await categoriesServices.deleteCategoryById(id);
    } catch (error) {
        console.log(error);
    }
};

const addCategory = async (name, image) => {
    try {
        return await categoriesServices.addCategory(name, image);
    } catch (error) {
        console.log(error);
    }
}

const getCategoryInfor = async (id) => {
    try {
        return await categoriesServices.getCategoryInfor(id);
    } catch (error) {
        console.log("get infor category error: ", error);
        throw error;
    }
}

const updateCategory = async (id, name, image) => {
    try {
        return await categoriesServices.updateCategory(id, name, image);
    } catch (error) {
        console.log("update category error: ", error);
        throw error;
    }
}

module.exports = { getAllCategories, deleteCategoryById, addCategory, getCategoryInfor, updateCategory };
