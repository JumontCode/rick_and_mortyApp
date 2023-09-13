const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;

  axios.get(`${URL}${id}`)
  .then(({data}) => {
    
    if(data){
      const { id, status, name, species, origin, image, gender } = data;
      const character = { id, status, name, species, origin, image, gender };
      res.status(200).json(character)
    }else{
      res.status(404).send({mesagge: "Not Found"})
    }
  }).catch((err) => {
    res.status(500).json({message: err})
  });

}
module.exports = getCharById;





// const axios = require('axios');

// function getCharbyId(res, id){

//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//         const { id, name, gender, species, origin = origin.name, image, status } = response.data;
//         const character = { id, name, gender, species, origin, image, status };
        
//         res.writeHead(200, { "Content-type": "application/json" });
//         res.end(JSON.stringify(character));
//       })
//       .catch(error => {
//         res.writeHead(500, {'Content-type': "text/plain"});
//         res.end(error.message);
//       });
// };

// // .then(successHandler, errorHandler)
// // .catch(errorHandler)


// // successHandler = (value) => que hacer si todo salio bien
// // errorHandler = (reason) => que hacer si todo salio mal


// module.exports = getCharbyId;