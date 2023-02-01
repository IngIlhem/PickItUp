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
  let item;
  try {
    const item = await Item.findByIdAndUpdate(id,{
      category,
      itemName,
      urlImage,
      description,
      ownerName,
      ownerTel,
      ownerAdress,
      state
    });
    item = await item.save()
  } catch (error) {
    res.status(200).send(error);
 }
 }
 const eraseItem = async function (req, res){
  try {
    const item = await Item.findByIdAndRemove(req.body);
   res.status(200).json(item);
    } catch (error) {
    res.status(200).send(error);
 }
 }
 const getById = async function (req, res){
  const id = req.params.id ;
   let item;
   try {
    item = await Item.findById(id);
   }  catch(err){
    console.log(err)
   }
 }

module.exports = { selectAll, addItem, updateItem, eraseItem, getById };
