const { Router } = require('express');
const fighterController = require('../controller/fighterController');

const router = Router();

router.post('/', fighterController.createFighter);
router.get('/:id', fighterController.getFighterById);
router.put('/:id', fighterController.updateFighter);


module.exports = router;