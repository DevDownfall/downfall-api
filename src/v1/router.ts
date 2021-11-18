import express from 'express';
const router = express.Router();

router.use('/testing/test', require('./testing/test'));

export = router;
