const http = require("http");
const data = require('./utils/data')


http.createServer(function(req,res){
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

      if(url === "/rickandmorty/characters"){
        const characters = data;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify(characters)
        );
      }else

       if(url.includes("/rickandmorty/character")){
        const div = url.split('/')
        const id = div[div.length - 1]
        const character = data.find((char) => char.id === parseInt(id));
        
        if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify(character)
        );
      } else {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("No encontrado");
      }
    }
}).listen(3001);
