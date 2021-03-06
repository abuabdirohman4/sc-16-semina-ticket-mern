// const { findById } = require('./model');
// const Categories = require('./model');
const {
    getAllCategories,
    getOneCategories,
    updateCategories,
    createCategories,
    deleteCategories,
} = require('../../../services/mongoose/categories');

const create = async (req, res, next) => {
    try {
        // const name = req.body.name;
        // const title = req.body.title;

        // const { name } = req.body;
        // const result = await Categories.create({ name });
        const result = await createCategories(req);

        res.status(201).json({
            data: result,
        });

    } catch (err) {
        next(err);
    }
    // Categories.create({ name })
    //     .then((result) => {
    //     }).catch((err) => { });
};

const index = async (req, res, next) => {
    try {
        // const result = await Categories.find();

        // const result = await Categories.find().select('_id name');
        const result = await getAllCategories(req);
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
        const { id } = req.params;

        // const result = await Categories.findById(id);

        // const result = await Categories.findOne({ _id: id });
        const result = await getOneCategories(req);


        // if (!result) {
        //     return res.status(404).json({ message: 'ID Categories tidak ditemukan' });
        // }

        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        // const { id } = req.params;
        // const { name } = req.body;

        // Dengan cara find by ID atau One
        // // const checkingCategories = await Categories.findById(id);
        // const result = await Categories.findOne({ _id: id });
        // if (!result) {
        //     return res.status(404).json({ message: 'ID Categories tidak ditemukan' });
        // }

        // // result.name = req.body.name;
        // result.name = name;
        // result.save();

        // Dengan cara Find By ID & Update
        // const result = await Categories.findByIdAndUpdate(
        //     { _id: id },
        //     { name },
        //     { new: true, runValidators: true }
        // );

        const result = await updateCategories(req);

        res.status(200).json({
            data: result,
        });

    } catch (err) {
        next(err);
    }
}

const destroy = async (req, res, next) => {
    try {
        // const { id } = req.params;
        // const result = await Categories.findByIdAndRemove(id);

        const result = await deleteCategories(req);
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    index,
    create,
    find,
    update,
    destroy,
};