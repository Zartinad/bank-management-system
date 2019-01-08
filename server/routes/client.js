const fs = require('fs');

module.exports = {
    addClientPage: (req, res) => {
        res.render('add-client.ejs', {
            title: "Welcome to Socka | Add a new player"
            ,message: ''
        });
    },
    addClient: (req, res) => {
      let message = '';
      let first_name = req.body.first_name;
      let last_name = req.body.last_name;
      let position = req.body.position;

      let query_customer = "INSERT INTO customers(first_name, last_name)" +
      "VALUES ('" + first_name + "','" + last_name + "');";

      db2.query(query_customer, (err, result) => {
        if (err){
          return res.status(500).send(err);
        }
        console.log("Successfully Added Customer");

        let query_account = "INSERT INTO accounts(account_holder,branch,amount_borrowed)"+
        "VALUES (" + result.insertId + "," + branch + "," + 1000 + ");";

        db2.query(query_account, (err, result2) => {
          if (err){
            return res.status(500).send(err);
          }
          console.log("Successfully binded");
          res.redirect('/');
        });
      });
    },
    addTransactionPage: (req, res) => {
      res.render('add-transaction.ejs', {
        title: "Transaction",
        message: ''
      });
    },
    addTransaction: (req, res) => {
      let account_number = req.body.account_number;
      let amount = req.body.amount;

      let query_account = "SELECT * FROM `accounts` WHERE acount_number = '" + account_number + "'";

      db2.query(query_account, (err,result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length == 0){
          message = 'Account Not Found';
          res.render('add-transaction.ejs', {
              message,
              title: "Welcome to Socka | Add a new player"
          });

        } else {
          let query = "INSERT INTO `transactions` (date_time, branch, account, amount)" +
          "VALUES" + "(CURRENT_TIMESTAMP, " + branch + "," + account_number + "," + amount + ");";

          db2.query(query, (err, result) => {
            if (err){
              return res.status(500).send(err);
            }
            console.log("Successfully Added Transaction");
            res.redirect('/');
          })
        }
      })
    }


};
