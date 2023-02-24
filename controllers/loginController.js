
const data = require("../models/loginSchema")
const bcrypt = require('bcrypt')


const login = async (req, res) => {
   const { email, password } = req.body;
   try {
      const logindata = await data.findOne({
         email
      });

      if (logindata) {
         const passwordmatch =await bcrypt.compare(password, logindata.password);
         if (passwordmatch) {
            res.status(201).json(logindata)
         }
         else {
            return res.status(404).json('Incorrect Password')
         }
      }
      else {
         return res.status(404).json('Invalid Email and Pasword')
      }

   } catch (error) {
      res.status(404).json(error)

   }

}
module.exports = {
   login
}