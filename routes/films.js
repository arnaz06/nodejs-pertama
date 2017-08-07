var express =  require('express')

var Film = require('../models/film')


var router = express.Router()

router.delete('/:filmId',function(req,res){
  var result = {}
  console.log('menghapus id : ',req.params.filmId)
  Film.findByIdAndRemove(req.params.filmId,function(err){
    if(err){
      result.msg = err
    }
    else{
      result.msg = "delete berhasil"
    }
    res.json(result)
  })
})

router.get('/',function(req,res,next) {
    Film.find({},function(err,films){
      if(err){
        res.json(err)
      }
      res.json(films)
    })
})
router.post('/',function(req,res){
  console.log('datanya : ', req.body)
  var result  = {}
  var film = new Film({
    title: req.body.title,
    year: req.body.year,
    released: req.body.released
  })
  film.save(function(err){
    if(err){
          result.msg = err
    }
    else{
      result.msg = "success"
    }
    res.json(result)
  })
})
module.exports = router
