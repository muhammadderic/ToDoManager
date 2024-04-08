const { connect } = require("mongoose");
const app = require("./app");

connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connection is successfull");
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port:${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  })