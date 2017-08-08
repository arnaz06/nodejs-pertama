var express =  require('express')

var Film = require('../models/film')
var filmController = require('../controllers/film')

var router = express.Router()


router.post('/',filmController.create)
router.delete('/:filmId',filmController.delete)
router.get('/',filmController.showAll)

module.exports = router
