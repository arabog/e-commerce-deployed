const jwt = require("jsonwebtoken")


// verifyToken
const verifyToken = (req, res, next) => {
          const authHeader = req.headers.token

          if(authHeader) {
                    const token = authHeader.split(' ')[1]

                    jwt.verify(token,
                              process.env.JWT_SEC,
                              
                              (err, user) => {
                                        if(err) {
                                                  res.status(403).json("Token is not valid!")
                                        }else {
                                                  req.anyth = user;

                                                  next();
                                        }
                              }
                    )
          }else {
                    return res.status(401).json("You are not authenticated")
          }
}


// verifyToken & authorize
const verifyTokenAndAuthorization = (req, res, next) => {

          // from verify token above
          verifyToken(req, res, () => {
                    if(req.anyth.id === req.params.id || req.anyth.isAdmin) {
                              next()
                    }else {
                              res.status(403).json("You are not allowed to do that!")
                    }
          })
}


// verifyToken & admin role
const verifyTokenAndAdmin = (req, res, next) => {

          verifyToken(req, res, () => {
                    if(req.anyth.isAdmin) {
                              next()
                    }else {
                              res.status(403).json("You are not allowed to do that!")
                    }
          })
}

module.exports = {
          verifyToken,

          verifyTokenAndAuthorization,

          verifyTokenAndAdmin
}