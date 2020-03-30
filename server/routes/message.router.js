const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const userStrategy = require('../strategies/user.strategy');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log("in getMessage route", req.params.id);
    let queryString = `SELECT "messages"."id", "message", "reciever_id", "user_id", "user"."username" FROM "messages" JOIN "user" ON "user"."id"="messages"."user_id" WHERE "reciever_id"=${req.params.id} ORDER BY "messages"."id" ASC`;
    pool.query(queryString)
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('in post message route', req.body);
    const newMessage = req.body;
    const queryText = 'INSERT INTO "messages" (message, reciever_id, user_id) VALUES ($1, $2, $3)';
    pool.query(queryText, [newMessage.message, newMessage.postUserId, newMessage.user])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in delete messages.router');
    const deleteId = req.params.id;
    const queryText = `DELETE FROM "messages" WHERE "id" =$1`;
    pool.query(queryText, [deleteId])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});

// router.put('/:id', rejectUnauthenticated,(req, res) => {
//     const updateItem = req.body;
//     console.log('in postRouter Put', updateItem);
//     const queryText = 'UPDATE "posts" SET (user_id, title, image_path, description) = ($1, $2, $3, $4) WHERE "id"=$5';
//     pool.query(queryText, [updateItem.userId, updateItem.postTitle, updateItem.postImagePath, updateItem.postDescription, updateItem.postId])
//     .then(() => res.sendStatus(200))
//     .catch(() => res.sendStatus(500));
// })

module.exports = router;