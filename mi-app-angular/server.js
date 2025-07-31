const { createServer } = require("http");
const { parse } = require("url");
const { join } = require("path");
const { readFileSync } = require("fs");

// Import the Angular Universal server
const { app } = require("./dist/mi-app-angular/server/server.mjs");

const port = process.env.PORT || 3000;

// Create HTTP server
const server = createServer(app);

server.listen(port, () => {
  console.log(`Angular Universal server listening on port ${port}`);
});

module.exports = app;
