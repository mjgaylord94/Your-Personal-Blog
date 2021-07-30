import * as express from "express";
import db from '../db';

let router = express.Router();

router.get('/:id?', async (req, res) => {
    let id: string = req.params.id;

    if (id) {
        try {
            res.json((await db.blogs.one(id))[0]);
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await db.blogs.all());
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}
);

router.post('/', async (req, res) => {
    let blogObj: blog = req.body

    try {
        res.json(await db.blogs.add(blogObj.title, blogObj.content, blogObj.authorid));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    let id: string = req.params.id;
    let blogObj: blog = req.body

    try {
        res.json(await db.blogs.edit(id, blogObj.title, blogObj.content));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    let id: string = req.params.id

    try {
        res.json(await db.blogs.remove(id));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

interface blog {
    id?: string,
    title: string,
    content: string,
    authorid: string
}

export default router;