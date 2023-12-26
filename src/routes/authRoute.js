const router = require("express").Router();
const Lecturer = require("../models/auth");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Signup Lecturer
router.post("/signup", async (req, res) => {
    const lecturer = await new Lecturer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        schoolName: req.body.schoolName,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        accessID: req.body.accessID
    });
    try {
        const user = await lecturer.save();
        return res.status(201).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//Login Lecturer
router.post("/signin", async (req, res) => {
    const user = await Lecturer.findOne({ email: req.body.email });
    try {
        if (!user) {
            return res.status(401).json("User Email Not Found!!");
        } else {
            console.log(user);
            const bytes = await CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const realPassword = await bytes.toString(CryptoJS.enc.Utf8);

            if (realPassword !== req.body.password) {
                return res.status(401).json("Wrong Password or Username!!!");
            }
            const token = await jwt.sign({
                id: user._id, email: user.email
            },
                process.env.SECRET_KEY, { expiresIn: "7d" }
            );
            const { password, ...info } = user._doc;
            return res.status(200).json({ ...info , token});
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;