const express = require('express');
const employeesRouter = express.Router();
const sqlite3 = require('sqlite3');
const apiRouter = require('./api');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

employeesRouter.get('/', (req, res, next) => {
    const sql = 'SELECT * FROM Employee WHERE is_current_employee = 1';
    db.all(sql, (err, employees) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({ employees: employees });
        }
    })
});

module.exports = employeesRouter;