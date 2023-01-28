const Item = require('../database-mongo/Item.model.js');

const selectAll = async function (req, res) {
   try {
     const items = await Item.find({});
     res.status(200).send(items);
   } catch (error) {
     res.status(200).send(error);
   }
 };

 const addItem = async function (req, res) {
    try {
        const item = await Item.create(req.body);
        res.status(200).send(item);
    } catch (error) {
        res.send(error);
    }
 }

module.exports = { selectAll, addItem };
