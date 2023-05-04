const categoryModel = require('./Model')

const getAllCategories = async () => {
    try {
        // return data
        // select * from category
        return await categoryModel.find();
    } catch (error) {
        console.log('Get all categories error: ', error)
    }
    return null;
}

const deleteCategoryById = async (id) => {
    try {
        await categoryModel.findByIdAndDeleteA(id)
       return true;
    } catch (error) {
        console.log(error)
    }
    return false;
}

const addCategory = async (name, image) => {
    try {
        const newCategory = {
            _id: data.length + 1,
            name, image
        };
        data.push(newCategory);
        return true;
    } catch (error) {
        console.log('add category err: ', error)
    }
    return false;
}

const getCategoryInfor = async (id) => {
    try {
        return await categoryModel.findById(id)
    } catch (error) {
        console.log("get infor category error: ", error);
        throw error;
    }
    
    return null;
}

const updateCategory = async (id, name, image) => {
    try {
        const category = await categoryModel.findById(id);
        if (category) {
            category.name = name;
            category.image = image;
            await category.save();
            return category;
        }
    } catch (error) {
        console.log("update infor category error: ", error);
        throw error;
    }
    return null;
}


module.exports = {getAllCategories, deleteCategoryById, addCategory, getCategoryInfor, updateCategory}

var data = [
    {
        _id: 1,
        image: 'https://icreate.agency/wp-content/uploads/2015/10/html5-1300x470.gif',
        name: 'HTML',
    },

    {
        _id: 2,
        image: 'https://www.courses.tutorialswebsite.com/assets/front/img/category/Nodejs-banner.jpeg',
        name: 'Node Js',
    },

    {
        _id: 3,
        image: 'https://engineering.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg',
        name: 'C++',
    },

    {
        _id: 4,
        image: 'https://www.cobalt.io/hubfs/Imported_Blog_Media/android-light-1.png',
        name: 'Android',
    },

    {
        _id: 5,
        image: 'https://apexensino.com.br/wp-content/uploads/2017/03/banner-java.jpg',
        name: 'Java',
    },

    {
        _id: 6,
        image: 'https://www.luisdev.com.br/wp-content/uploads/2021/03/Desktop-1.png',
        name: 'C#',
    },
]