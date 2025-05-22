const { Router } = require('express');
const rankingController = require('../controller/rankingController');

const router = Router();

router.post('/:typeOfRanking', rankingController.createRankingsRecord)
router.get('/p4p', rankingController.getP4pRankings);
router.get('/division/:division', rankingController.getDivisionRankings);
router.get('/:id', rankingController.getCurrentFighterRankingsRecord);


module.exports = router;