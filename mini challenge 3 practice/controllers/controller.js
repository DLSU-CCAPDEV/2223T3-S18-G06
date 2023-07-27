const db = require('../models/db.js');
const Transaction = require('../models/TransactionModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/`. This displays `index.hbs` with all
            transactions currently stored in the database.
    */
    getIndex: async function(req, res) {
        var query = {};

        var value = {
            transaction: await db.findMany(Transaction, query)
        };

        res.render('index', value); // This is to load the page initially
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getCheckRefNo`. This function checks if a
            specific reference number is stored in the database. If the number
            is stored in the database, it returns an object containing the
            reference number, otherwise, it returns an empty string.
    */
    getCheckRefNo: async function(req, res) {
        var refno = req.query.refno;

        var result = await db.findOne(Transaction, {refno: refno});

        res.send(result);
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getAdd`. This function adds the transaction
            sent by the client to the database, then appends the new
            transaction to the list of transactions in `index.hbs`.
    */
    getAdd: async function(req, res) {
        var name = req.query.name;
        var refno = req.query.refno;
        var amount = req.query.amount;

        await db.insertMany(Transaction, {name: name, refno: refno, amount: amount});

        var result = await db.findOne(Transaction, {refno: refno});

        res.send(result);
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getDelete`. This function deletes the transaction
            from the database, then removes the transaction from the list of
            transactions in `index.hbs`.
    */
    getDelete: async function (req, res) {
        var refno = req.query.refno;

        result = await db.deleteOne(Transaction, {refno: refno});
    }

}

module.exports = controller;
