const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get('/', (req, res) => {
    console.log("in getUsers route");
    let queryString = 'SELECT "username", "id" FROM "user" ORDER BY "id" ASC';
    pool.query(queryString)
        .then(results => {
            res.send(results.rows);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('in delete admin.router');
    const deleteId = req.params.id;
    const queryText = `DELETE FROM "user" WHERE "id" =$1`;
    pool.query(queryText, [deleteId])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});


module.exports = router;