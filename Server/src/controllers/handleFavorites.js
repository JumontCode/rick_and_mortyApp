let myFavorites = [];

function postFav(req, res){
    myFavorites.push(req.body);
    res.json(myFavorites);
};

function deleteFav(req, res){
    const { id } = req.params;

    const filter = myFavorites.filter((fav) => fav.id !== parseInt(id));
    myFavorites = filter;
    res.send(myFavorites);
};

module.exports = { postFav, deleteFav }