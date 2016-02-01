var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: '小梦——群核工程师小助手 | Hackday 作品'});
});

router.get('/download/:id', function(req, res, next){
    var id = req.params.id,
        filename = 'Guozi-' + id + '.zip';
    var file = path.resolve(__dirname, '../download/' + filename);
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.download(file);
});

module.exports = router;
