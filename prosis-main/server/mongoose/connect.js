const mongoose = require("mongoose");

exports.connect = async () => {
  // Sets up a local mongodb server for testing
  if (process.env.NODE_ENV === "test") {
    const { MongoMemoryServer } = require("mongodb-memory-server");
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), {
      useNewUrlParser: true,
      dbName: "ProsisDTE",
      useUnifiedTopology: true,
    });
  } else {
    // Connects to the cloud based mongodb server
    await mongoose.connect(
      process.env.DB_CONNECTION,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to database")
    );
  } 
};

exports.disconnect = async () => {
  await mongoose.disconnect();
};
