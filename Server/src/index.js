// const http = require("http");
// const getCharbyId = require("./controllers/getCharById.js");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url.includes("/rickandmorty/character")) {
//       // const div = url.split("/");
//       // const id = parseInt(div[div.length - 1])
//       const id = Number(url.split("/").pop());

//       getCharbyId(res, id);
//     } else {
//       res.writeHead(400, { "Content-type": "application/json" });
//       res.end(JSON.stringify({ error: "No encontrado" }));
//     }
//   })
//   .listen(3001);

const express = require("express");
const router = require("./routes/index");
const { conn } = require("./DB_connection");
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

conn
  .sync({
    force: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
