const fs = require('fs');

module.exports = {
    addClientPage: (req, res) => {
        res.render('add-client.ejs', {
            title: "Welcome to Socka | Add a new player"
            ,message: ''
        });
    },
    addClient: (req, res) => {
      if (!req.files) {
          return res.status(400).send("No files were uploaded.");
      }

      let message = '';
      let first_name = req.body.first_name;
      let last_name = req.body.last_name;
      let position = req.body.position;

      let query_customer = "INSERT INTO customer(first_name, last_name)" +
      "VALUES (''" + first_name + "'),('" + last_name + "'');";
      let query_account = "";

      db2.query(query_customer, (err, result) => {
        if (err){
          return res.status(500).send(err);
        }
        console.log("Successfully Added Customer");
      })

    },

};
