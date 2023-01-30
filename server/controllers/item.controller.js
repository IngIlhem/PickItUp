const Item = require('../database-mongo/Item.model.js');

const selectAll = async function (req, res) {
   try {
     const items = await Item.find();
     res.status(200).send(items);
   } catch (error) {
     res.status(500).send(error);
   }
 };

 const addItem = async function (req, res) {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).send(error);
    }
 }
 const updateItem = async function (req, res){

 }
 const eraseItem = async function (req, res){

 }

module.exports = { selectAll, addItem, updateItem, eraseItem };
