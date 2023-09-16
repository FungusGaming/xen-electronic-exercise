const express = require('express')
const router = express.Router()
const message = require('../constant/message')
const { mongoose } = require('mongoose');

const Tourism = {
  destination: {
    type: String,
    required: [true, 'Destination is required']
  },
  agent: {
    type: String,
  },
  detail: {
    type: String,
  },
  startTimeline: {
    type: String,
    required: true
  },
  endTimeline: {
    type: String,
    required: true
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
}

const tourismSchema = new mongoose.Schema(Tourism, { timestamps: true })
const TourismModel = mongoose.model('Tourism', tourismSchema)
// middleware that is specific to this router
router.use((req, res, next) => {
  next()
})
router.get('/', async (req, res) => {
  const all = await TourismModel.find({}).exec()
  res.json(all)
})
router.post('/', (req, res) => {
  const newTourism = new TourismModel(req.body)
  newTourism.save().then(data => {
    res.json(data)
  }).catch(err => {
    console.log("Tourism post err:");
    console.log(err);
    res.status(message.fail.code).json(message.fail)
  })
})
router.get('/:id', async (req, res) => {
  const { id } = req.params

  const p = await TourismModel.findById(id).exec()
  res.json(p)
})
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const edit = await TourismModel.findByIdAndUpdate(id, req.body, { runValidators: true })
  res.json(edit)
})
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const removed = await TourismModel.findByIdAndDelete(id)
  res.json(message.success)
})

module.exports = router