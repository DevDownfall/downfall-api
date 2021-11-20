import express from 'express';
const router = express.Router();

router.use('/testing/test', require('./testing/test'));

// Email Routes
router.use('/email/confirmation', require('./email/confirmation'))

export = router;
