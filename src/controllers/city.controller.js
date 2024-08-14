const City = require("../models/City");
const catchError = require("../utils/catchError");

const GetAll = catchError(async(req,res)=>{
  const data = await City.findAll();
  if(data.length === 0){return res.status(404).json({message: "Data not found"})}
  else{return res.json(data)};
});

const GetOne = catchError(async(req, res)=>{
  const {id} = req.params;
  const data = await City.findByPk(id);
  if(!data){return res.status(404).json({message: "Data not found"})}
  else{return res.json(data)}
});

const Create = catchError(async(req, res)=>{
  if(Object.keys(req.body).length === 0){return res.status(400).json({message: "Please add data"})}
  else{
  const data = await City.create(req.body)
  return res.json(data)
  }
});

const Update = catchError(async(req, res)=>{
  if(Object.keys(req.body).length === 0){return res.status(400).json({message: "Please add data"})}
  else{
  const {id} = req.params;
  const data = await City.update(req.body, {where: {id:id}, returning: true})
  return res.json(data[1][0])
  }
});

const Delete = catchError(async(req, res)=>{
  const {id} = req.params;
  const data = await City.destroy({where: {id:id}})
  if(!data){return res.status(404).json({message: 'Data not found'})}
  else{ return res.status(200).json({message: 'Delete complete'})}
});


module.exports = {GetAll, GetOne, Create, Update, Delete};