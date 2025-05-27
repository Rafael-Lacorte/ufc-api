const { Router } = require('express');
const fightController = require('../controller/fightController');

const router = Router();

router.post('/', fightController.createFight);
router.get('/:id', fightController.getFightById);
router.get('/fighter/:fighterId', fightController.getFightsByFighterId);
router.get('/event/:eventId', fightController.getFightsByEventId);

router.put('/:id', fightController.updateFight);
router.delete('/:id', fightController.deleteFight)


module.exports = router;