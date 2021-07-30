import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/', async (req, res) => {
    
    try {
        res.json(await db.authors.all());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }

}
);

export default router;