const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
users.forEach(user => {
    if( user.email === email && user.password === password){
      res.status(200).json({ access: true });
    }
})
res.status(200).json({access: false})
}

module.exports = login;