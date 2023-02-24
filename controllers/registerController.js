const Data = require("../models/loginSchema");
const bcrypt = require('bcrypt')

const spassword = async (password) => {
    try {

        const spasswordhash = await bcrypt.hash(password, 6);
        return spasswordhash;

    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: "Error in Secure Password"
        })
    }
}
const create = async (req, res) => {
    try {

        const { user, password, email, registration } = req.body;

        const employeeExists = await Data.findOne({
            email
        })

        if (employeeExists) {
            return res.status(404).json('Employee Already Exist')
        }
        const securepassword = await spassword(password);

        const users = await Data.create(
            {
                user, password:securepassword, email, registration
            })

        res.status(201).json(users)
    } catch (error) {
        res.status(404).json(error)
    }
}
module.exports = {
    create
}