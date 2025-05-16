const { Router } = require('express');
const rankingController = require('../controller/rankingController');

const router = Router();

router.get('/:division', rankingController.getDivisionRankings);

module.exports = router;