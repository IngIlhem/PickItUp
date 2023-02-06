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
  const id = req.params.id ;
  const {category,    itemName,    urlImage,    description,    ownerName,    ownerTel,    ownerAdress,    state}=req.body;
  try {
    let item = await Item.findByIdAndUpdate(id,{category,    itemName,    urlImage,    description,    ownerName,    ownerTel,    ownerAdress,    state});
    item = await item.save();
    //await Itemconst item = await Item.findById(id);
    //const item = await Item.findOne({_id:ObjectId(id)});
    //const item = await Item.findByIdAndUpdate(id,{category,    itemName,    urlImage,    description,    ownerName,    ownerTel,    ownerAdress,    state});
    res.status(200).json(item);
  } catch (error) {
    res.send(error);
 }
 }
 const eraseItem = async function (req, res){
  const id = req.params.id;
  try {
    const item = await Item.findByIdAndRemove(id);
    res.status(200).json(item);
    } catch (error) {
    res.status(404).send(error);
 }
 }
 

module.exports = { selectAll, addItem, updateItem, eraseItem};
