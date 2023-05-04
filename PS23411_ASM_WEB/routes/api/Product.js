var express = require("express");
var router = express.Router();
const productController = require("../../components/product/Controller");
const categoryController = require("../../components/category/Controller");

const {checkTokenApp} = require('../../middle/Authen')
const upload = require('../../middle/UploadFile')
// http://localhost:3000/api/products/:id/category
// 64226065fc13ae61dc0001fe
router.get('/:id/category', async (req, res, next) => {
    try {
        const {id} = req.params;
        const category = await categoryController.getCategoryInfor(id);
        if (category) {
            return res.status(200).json({result: true, category: category});
        }
    } catch (error) {
        return res.status(500).json({ result: false, products: null})
        
    }
});


// http://localhost:3000/api/products/get-all
router.get('/get-all', [checkTokenApp] ,async (req, res, next) => {
    try {
        const products = await productController.getAllAssignments();
        if (products) {
            return  res.status(200).json({result: true, products: products});
        }
    } catch (error) {
        return res.status(500).json({ result: false, products: null})
    }
});

// http://localhost:3000/api/products/search
router.get('/search', async (req, res, next) => {
    try {
        const {keywords} = req.query;
        const products = await productController.searchProduct(keywords);
        return  res.status(200).json({result: true, products: products});
    } catch (error) {
        return res.status(500).json({ result: false, products: null})
    }
});

// http://localhost:3000/api/products/get-all-categories
router.get('/get-all-categories', async (req, res, next) => {
    try {
        const categories = await categoryController.getAllCategories();
        console.log(res)
        if (res) return res.status(200).json({result: true, categories})
        return res.status(400).json({result: false});
    } catch (error) {
        return res.status(500).json({ result: false, categories: null})
        
    }
});

// http://localhost:3000/api/products/:id/assignments-by-category
router.get('/:id/assignments-by-category', async (req, res, next) => {
    try {
        const {id} = req.params;
        const assignments = await productController.getAssignmentByCategory(id);
        if (assignments) {
            return res.status(200).json(assignments);
        }
        // if (res) return res.status(200).json({result: true, categories})
        return res.status(400).json({result: false});
    } catch (error) {
        return res.status(500).json({ result: false})
        
    }
});

// http://localhost:3000/api/products/upload
router.post('/upload', upload.single('image'), async (req, res, next) => {
    try {
        let { file } = req;
        if(file) {
            let link = `http://172.16.89.168:3000/images/${file.filename}`;
            return res.status(200).json({result: true, link: link});
        }
        return res.status(400).json({result: false});
    } catch (error) {
        console.log('Upload image error: ' + error);
        return res.status(500).json({result: false});

    }
})

// http://localhost:3000/api/products/upload-images
// upload images
router.post('/upload-images', upload.array('image', 10), async (req, res, next) => {
    try {
        let { files } = req;
        if(files && files.length > 0) {
            let links = [];
            files.forEach(file => {
                links.push(`http://172.16.89.168/images/${file.filename}`)
            });
            return res.status(200).json({result: true, links: links});
        }
        return res.status(400).json({result: false});
    } catch (error) {
        console.log('Upload image error: ' + error);
        return res.status(500).json({result: false});

    }
})

module.exports = router;