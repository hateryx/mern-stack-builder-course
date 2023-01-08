import { UnAuthenticatedError } from '../errors/index.js'
import jwt from 'jsonwebtoken'

UnAuthenticatedError
const auth = async (req, res, next) => {
    //const header = req.headers
    //console.log(header)

    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnAuthenticatedError('Authentication Invalid')
    }
    //console.log(authHeader)
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        //console.log(payload)
        //attach the user request object
        //req.user = payload
        req.user = { userId: payload.userId }
        next()
    } catch (error){
        throw new UnAuthenticatedError('Authentication Invalid')
    }
}

export default auth

