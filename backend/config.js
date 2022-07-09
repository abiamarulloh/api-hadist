// heroku Url ClearDb: mysql://b9d0204b9d5eeb:0f95c8cf@us-cdbr-east-05.cleardb.net/heroku_2742ddf698ff267?reconnect=true

const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "localhost",
    user: "root",
    password: "",
    database: "apihadits",
    
    // host: "us-cdbr-east-05.cleardb.net",
    // user: "b9d0204b9d5eeb",
    // password: "0f95c8cf",
    // database: "heroku_2742ddf698ff267",

    host: "localhost",
    user: "amarabic_root",
    password: "h9T3@BNA5JLC9ky",
    database: "amarabic_hadits",
  },
  listPerPage: 10,
};
module.exports = config;
