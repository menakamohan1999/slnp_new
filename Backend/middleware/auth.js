const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });


const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication."})

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if(err) return res.status(400).json({msg: "Invalid Authentication."})
            req.user = user
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }


    
}

module.exports = auth