import jwt from 'jsonwebtoken';
const auth = (req, res, next)=>{
    const jwtToken = req.header('Authorization');
    if(!(jwtToken)){
        res.status(401).json({message: "No token provided"})
    }
    const token = jwtToken.split(" ")[1];
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = payload;
        next();
    }
    catch(err){
        res.status(401).json({message: "session expired or Invalid token. Please login again."})
    }
};
export default auth;