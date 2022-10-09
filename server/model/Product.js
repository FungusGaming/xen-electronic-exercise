const express = require('express')
const router = express.Router()
const message = require('../constant/message')
const { mongoose } = require('mongoose');

const Product = {
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number
  }
}

const productSchema = new mongoose.Schema(Product)
const ProductModel = mongoose.model('Product', productSchema)
// middleware that is specific to this router
router.use((req, res, next) => {
  next()
})
router.get('/', async (req, res) => {
  const all = await ProductModel.find({}).exec()
  res.json(all)
})
router.post('/', (req, res) => {
  const newProduct = new ProductModel(req.body)
  newProduct.save().then(data => {
    res.json(data)
  }).catch(err => {
    console.log("Product post err:");
    console.log(err);
    res.json(message.fail)
  })
})
router.get('/:id', async (req, res) => {
  const { id } = req.params

  const p = await ProductModel.findById(id).exec()
  res.json(p)
})
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const edit = await ProductModel.findByIdAndUpdate(id, req.body, { runValidators: true })
  res.json(edit)
})
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const removed = await ProductModel.findByIdAndDelete(id)
  res.json(message.success)
})

module.exports = router