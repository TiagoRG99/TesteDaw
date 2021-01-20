var Batismo = require('../controllers/batismos')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/batismos', function (req, res, next) {
  Batismo.listar()
    .then(batismo => {
      res.status(200).jsonp(batismo)
    });


});


router.get('/api/batismos/batisado', function (req, res, next) {
  Batismo.listar_batisado()
    .then(batismo => {
      res.status(200).jsonp(batismo)
    });

});


router.get('/api/batismos/:ano', function (req, res, next) {
  Batismo.listar_by_ano(req.params.ano)
    .then(batismo => {
      res.status(200).jsonp(batismo)
    });

});

router.get('/api/batismos/:id', function (req, res, next) {
  Batismo.listar_by_id(req.params.id)
    .then(batismo => {
      res.status(200).jsonp(batismo)
    });


});



module.exports = router;
