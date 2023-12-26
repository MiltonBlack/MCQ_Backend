const jwt = require("jsonwebtoken");

async function verify(req, res, next) {
    const authHeader = await req.headers['authorization'];
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) return res.status(403).json("Token cannot be verified!!!");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("You are not Authenticated");
    }
}

module.exports = verify;