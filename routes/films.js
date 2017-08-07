var express =  require('express')

var Film = require('../models/film')


var router = express.Router()

router.get('/',function(req,res,next) {
res.json({
  msg: "Works guys"
  })
})
router.post('/',function(req,res){
  console.log('datanya : ', req.body)

  res.json(req.body)
})
module.exports = router
