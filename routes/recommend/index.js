const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const styleRecommend = require('../../controllers/recommend/styleRecController');

router.get('/style', styleRecommend.styleRec);

module.exports = router;