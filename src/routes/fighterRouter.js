const { Router } = require('express');
const fighterController = require('../controller/fighterController');

const router = Router();

router.post('/', fighterController.createFighter);
router.get('/:id', fighterController.getFighterById);
router.put('/:id', fighterController.updateFighter);
router.delete('/:id', fighterController.deleteFighter)


module.exports = router;