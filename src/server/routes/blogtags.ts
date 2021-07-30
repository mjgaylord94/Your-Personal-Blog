import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/:id', async (req, res) => {
    const id: string = req.params.id
    
    try {
        res.json(await db.blogtags.one(id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }

}
);

export default router;