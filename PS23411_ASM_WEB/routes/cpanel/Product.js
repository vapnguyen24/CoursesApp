var express = require("express");
var router = express.Router();
const productsController = require("../../components/product/Controller");
const categoryController = require("../../components/category/Controller");
const upload = require("../../middle/UploadFile");
const { checkTokenWeb } = require("../../middle/Authen");

// http://localhost:3000/products/assignments-list
router.get("/assignments-list", [checkTokenWeb], async (req, res, next) => {
    try {
        const products = await productsController.getAllAssignments();
        const categories = await categoryController.getAllCategories();
        res.render("products/assignments-table", { products, categories });
    } catch (error) {
        next(error);
    }
});

// http://localhost:3000/products/assignments-list/:id/delete
router.get("/assignments-list/:id/delete-asm", async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await productsController.deleteAssignmentById(id);
        console.log("result in asm: ", result);
        return res.json({ result });
    } catch (error) {
        return res.json({ result: false });
    }
});

// http://localhost:3000/products/assignments-list/:id/delete-category
router.get("/assignments-list/:id/delete-category", async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await categoryController.deleteCategoryById(id);
        console.log("result in asm: ", result);
        return res.json({ result });
    } catch (error) {
        return res.json({ result: false });
    }
});

// http://localhost:3000/products/add-new
router.get("/add-new", [checkTokenWeb], async (req, res, next) => {
    try {
        const categories = await categoryController.getAllCategories();
        return res.render("products/add-asm", { categories });
    } catch (error) {
        next(error);
    }
});

// http://localhost:3000/products/add-new
// xử lý thêm mới sản phẩm
router.post(
    "/add-new",
    [checkTokenWeb, upload.single("image")],
    async (req, res, next) => {
        try {
            let { body, file } = req;
            if (file) {
                file = `http://172.16.89.168:3000/images/${file.filename}`;
                console.log("file: ", file);
                body = { ...body, image: file };
            }
            const { name, image, price, describe, source, category } = body;
            const result = await productsController.addProduct(
                name,
                image,
                price,
                describe,
                source,
                category
            );
            console.log(result);
            if (result) {
                return res.redirect("/products/assignments-list");
            } else {
                return res.redirect("/products/add-new");
            }
            // 192.168.1.9 => home ip
            // 172.16.89.168 => fploly ip
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
);

// http://localhost:3000/products/assignments-list
// xử lý thêm mới danh mục
router.post(
    "/assignments-list",
    [upload.single("image")],
    async (req, res, next) => {
        try {
            let { body, file } = req;
            if (file) {
                file = `http://172.16.89.168:3000/images/${file.filename}`;
                console.log("file: ", file);
                body = { ...body, image: file };
            }
            const { name, image } = body;
            const result = await categoryController.addCategory(name, image);
            if (result) {
                return res.redirect("/products/assignments-list");
            }
            // 192.168.1.6 => home ip
            // 172.16.89.168 => fploly ip
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
);

// http://localhost:3000/products/assignments-list/:id/category
router.get("/assignments-list/:id/category", async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await categoryController.getCategoryInfor(id);
        console.log("result in asm: ", result);
        return res.json({ result });
    } catch (error) {
        return res.json({ result: false });
    }
});

// http://localhost:3000/products/assignments-list/:id/update
// xử lý cập nhật danh mục
router.post(
    "/assignments-list/:id/update",
    [upload.single("image")],
    async (req, res, next) => {
        try {
            let { body, file } = req;
            const { id } = req.params;
            if (file) {
                file = `http://172.16.89.168:3000/images/${file.filename}`;
                console.log("file: ", file);
                body = { ...body, image: file };
            }
            const { name, image } = body;
            const result = await categoryController.updateCategory(
                id,
                name,
                image
            );
            console.log("res update: ", result);
            if (result) {
                return res.json({ result });
            }
            // 192.168.1.9 => home ip
            // 172.16.89.168 => fploly ip
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
);

// http://localhost:3000/products/assignments-list/:id/update-asm
// hien thi trang chi tiet
router.get(
    "/assignments-list/:id/update-asm",
    [checkTokenWeb],
    async (req, res, next) => {
        try {
            let { id } = req.params;
            const product = await productsController.getProductById(id);
            let categories = await categoryController.getAllCategories();
            categories = categories.map((item) => {
                item.selected = false;
                if (item._id.toString() == product.category.toString()) {
                    item.selected = true;
                }
                return item;
            });
            console.log(categories);
            res.render("products/details-asm", { categories, product });
        } catch (error) {
            next(error);
            console.log(error);
        }
    }
);

// http://localhost:3000/products/:id/update-asm
// xử lý cập nhật sản phẩm
// middleware
router.post(
    "/assignments-list/:id/update-asm",
    [checkTokenWeb, upload.single("image")],
    async (req, res, next) => {
        try {
            let { id } = req.params;
            let { body, file } = req;
            if (file) {
                file = `http://172.16.89.168:3000/images/${file.filename}`;
                console.log("file: ", file);
                body = { ...body, image: file };
            }
            const { name, image, price, describe, source, category } = body;
            const result = await productsController.updateProductById(
                id,
                name,
                image,
                price,
                describe,
                source,
                category
            );
            console.log(result);
            if (result) {
                return res.redirect("/products/assignments-list");
            }
            // 192.168.1.9 => home ip
            // 172.16.89.168 => fploly ip
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
);

module.exports = router;
