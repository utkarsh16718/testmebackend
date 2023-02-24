const data = require("../models/loginSchema")


const searshid = async (req, res) => {
   const { _id } = req.query;
   try {
      const logindata = await data.findOne({
         _id
      });

      if (logindata) {   
            res.status(201).json(logindata)   
      }
      else {
         return res.status(404).json('Invalid Email and Pasword')
      }

   } catch (error) {
      res.status(404).json(error)

   }

}
module.exports = {
    searshid
}