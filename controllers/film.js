var Film = require('../models/film')
module.exports = {
  index: function(req,res){

  },
  create: function(req,res){
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
  },
  update: function(req, res){

  },
  delete: function(req,res){
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
  },
  showAll: function(req, res){
    var result = {}
    Film.find({},function(err,films){
      if(err){
        result.msg = err
      }
      res.json(films)
    })
  }
}
