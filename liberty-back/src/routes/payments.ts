const { Router } = require('express')
const paymentsController = require('../controllers/payments');

const router = Router()


// Route to get debts by state
router.get('/:state', paymentsController.getDebtsByState);

module.exports = router;