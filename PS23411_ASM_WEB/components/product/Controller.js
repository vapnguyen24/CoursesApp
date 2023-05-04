const productServices = require("./Services");

const getAllAssignments = async () => {
    try {
        return await productServices.getAllAssignments();
    } catch (error) {
        throw error;
    }
};

const getAssignmentByCategory = async (id) => {
    try {
        return await productServices.getAssignmentByCategory(id);
    } catch (error) {
        throw(error)
    }
    return null;
}

const deleteAssignmentById = async (id) => {
    try {
        return await productServices.deleteAssignmentById(id);
    } catch (error) {
        console.log(error);
    }
};

const addProduct = async (name, image, price, describe, source, category) => {
    try {
        return await productServices.addProduct(name, image, price, describe, source, category);
    } catch (error) {
        console.log(error);
    }
}

const getProductById = async (id) => {
    try {
        return await productServices.getProductById(id);
    } catch (error) {
        console.log(error)
    }
}

const updateProductById = async (id, name, image, price, describe, source, category) => {
    try {
        return await productServices.updateProductById(id, name, image, price, 
            describe, source, category);
    } catch (error) {
        console.log("update product error: ", error);
        throw error;
    }
}

const searchProduct = async (keyword) => {
    try {
       
       return await productServices.searchProduct(keyword); 
    } catch (error) {
        console.log("search product error: ", error);
    }
    return [];
}

module.exports = { getAllAssignments, deleteAssignmentById, addProduct,
     getProductById, updateProductById, searchProduct, getAssignmentByCategory };
