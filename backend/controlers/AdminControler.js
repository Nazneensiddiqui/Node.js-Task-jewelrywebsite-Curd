const AdminModel = require("../models/adminModel");
const bcrypt = require("bcrypt");

const LoginSystem = async (req, res) => {
    console.log(req .body)
    const { name, email, password } = req.body;

    try {
        if (name) {
            // SignUp Logic
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt); // Password hashing
            const existingUser = await AdminModel.findOne({ email });

            if (existingUser) {
                return res.status(400).send({ msg: "User already exists! Please log in." });
            }

            const newUser = await AdminModel.create({
                name:name,
                email:email,
                password: hashedPassword,
            });

            return res.status(201).send({ msg: "Sign Up Successful!", user: newUser });
        } else {
            // Login Logic
            const user = await AdminModel.findOne({ email });

            if (!user) {
                return res.status(400).send({ msg: "Invalid Email" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).send({ msg: "Invalid Password" });
            }

            return res.status(200).send({ msg: "Login Successful!", user });
        }
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).send({ msg: "Server Error" });
    }
};

module.exports = {
    LoginSystem
}