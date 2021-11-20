import express from 'express';
const router = express.Router();
import * as email from '../../utilities/mailer.js'

router.get('/', async (req, res, next) => {
    try {
        res.send(await email.sendOrderConfirmation(req.body));
    } catch (err) {
        next(err);
    }
});

export = router;

