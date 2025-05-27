const { Router } = require('express');
const eventController = require('../controller/eventController');

const router = Router();

router.post('/', eventController.createEvent);
router.get('/:id', eventController.getEventById);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent)


module.exports = router;