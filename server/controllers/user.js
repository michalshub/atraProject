const User = require('../models/User')

const createUser = async (req, res) => {
    console.log("--------createUser")
    let myUser = new User(req.body);
    console.log(myUser);
    try {
      await myUser.save();
      res.status(200).json({ newUser: myUser });
    }
    catch (error) {
      res.send("cannot save new user: " + error.message);
    }
  }

  const getAllUsers = async (req, res) => {
    console.log("--------getAllUsers")
        try {
            let users = await User.find()
            if (users) {
                log("#######users found!!!")
                return res.status(200).send("users:" +users )
            }
            console.log("not found");
          return  res.send("could not have user")

        }
        catch (error) {
            res.status(500).json({ myMessage: error.message })
        }
   

}


  
  module.exports = { createUser,getAllUsers }
