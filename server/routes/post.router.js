const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const userStrategy = require('../strategies/user.strategy');

router.get('/', rejectUnauthenticated, (req, res) => {
    console.log("in getPost route");
    let queryString = 'SELECT * FROM "posts" ORDER BY "id" ASC';
    pool.query(queryString)
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('in postPost route', req.body)
    const newPost = req.body;
    const queryText = 'INSERT INTO "posts" (user_id, title, image_path, description) VALUES ($1, $2, $3, $4)';
    pool.query(queryText, [newPost.userId, newPost.postTitle, newPost.postImagePath, newPost.postDescription])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in delete post.router');
    const deleteId = req.params.id;
    const queryText = `DELETE FROM "posts" WHERE "id" =$1`;
    pool.query(queryText, [deleteId])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});

router.put('/:id', rejectUnauthenticated,(req, res) => {
    const updateItem = req.body;
    console.log('in postRouter Put', updateItem);
    const queryText = 'UPDATE "posts" SET (user_id, title, image_path, description) = ($1, $2, $3, $4) WHERE "id"=$5';
    pool.query(queryText, [updateItem.userId, updateItem.postTitle, updateItem.postImagePath, updateItem.postDescription, updateItem.postId])
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
})

module.exports = router;
