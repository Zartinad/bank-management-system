module.exports = {
    getHomePage: (req, res) => {
        let transaction_query = "SELECT * FROM `transactions` ORDER BY date_time";
        let customer_query = "SELECT * FROM  `customers`"
        // execute query
        // db.query(query, (err, result) => {
        //     if (err) {
        //         res.redirect('/');
        //     }
        //     res.render('index.ejs', {
        //         title: "Welcome to Socka | View Players"
        //         ,players: result
        //     });
        // });

        db2.query(customer_query, (err, result2) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Socka | View Players",
                customers: result2
            });
        });

        // db2.query(transaction_query, (err, result) => {
        //     if (err) {
        //         res.redirect('/');
        //     }
        //     res.render('index.ejs', {
        //         title: "Welcome to Socka | View Players",
        //         transactions: result
        //     });
        // });
    },
};
