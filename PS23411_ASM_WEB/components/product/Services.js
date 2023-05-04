const productModel = require("./Model");
const categoryModel = require("../category/Model");

const getAllAssignments = async () => {
    try {
        const data = await productModel.find({}).populate('category', 'name');
        let newData = []
        data.map( item => {
            newData.push({
                _id: item._id,
                name: item.name,
                image: item.image,
                price: item.price,
                describe: item.describe,
                source: item.source,
                category: item.category.name,
            })
        })
        return newData;
    } catch (error) {
        throw error;
    }
};

const getAssignmentByCategory = async (id) => {
    try {
        // const products = await productModel.find({}).populate('category', 'name');
        const products = await productModel.find();
        console.log(products)
        let newProduct = [];
        if (products) {
            products.filter(
                (product) => {
                    if (product.category.toString() == id.toString()) {
                        newProduct.push({
                            _id: product._id,
                            name: product.name,
                            image: product.image,
                            price: product.price,
                            describe: product.describe,
                            source: product.source,
                            category: product.category.name,
                        });
                    }
                }
                
            );
        }

        return newProduct;
    } catch (error) {
        throw error;
    }
    return null;
};

const deleteAssignmentById = async (id) => {
    try {
        await productModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        console.log(error);
    }
    return false;
};

const addProduct = async (name, image, price, describe, source, category) => {
    try {
        const newProduct = new productModel({
            name,
            image,
            price,
            describe,
            source,
            category,
        });
        await newProduct.save();
        return true;
    } catch (error) {
        console.log("add product err: ", error);
    }
    return false;
};

const getProductById = async (id) => {
    try {
        return await productModel.findById(id);
    } catch (error) {
        console.log("get infor product error: ", error);
        throw error;
    }
    return null;
};

const updateProductById = async (
    id,
    name,
    image,
    price,
    describe,
    source,
    category
) => {
    try {
        const product = await productModel.findById(id);
        if (product) {
            product.name = name ? name : product.name;
            product.image = image ? image : product.image;
            product.price = price ? price : product.price;
            product.describe = describe ? describe : product.describe;
            product.source = source ? source : product.source;
            product.category = category ? category : product.category;
            await product.save();
            return true;
        }
    } catch (error) {
        console.log("update product error: ", error);
        throw error;
    }

    return false;
};

// tim kiem san pham

const searchProduct = async (keyword) => {
    try {
        let query = {
            quantity: { $gt: 100, $lt: 100 },
            // tim kiem ko phan biet hoa thuong
            name: { $regex: keyword, $options: "i" },

            $or: [{ price: { $lt: 100 } }, { price: { $gt: 100 } }],
        };
        let product = await productModel.find(query);
        return product;
    } catch (error) {
        console.log("search product error: ", error);
    }
    return [];
};

module.exports = {
    getAllAssignments,
    deleteAssignmentById,
    addProduct,
    getProductById,
    updateProductById,
    searchProduct,
    getAssignmentByCategory,
};
