import express from 'express';
const router = express.Router();

router.use('/testing/test', require('./testing/test'));

// Auth Routes
router.use('/auth/login', require('./auth/login'))
router.use('/auth/register', require('./auth/register'))

// Email Routes
router.use('/email/confirmation', require('./email/confirmation'))

export = router;
