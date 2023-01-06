import { UnAuthenticatedError } from '../errors/index.js'


const auth = async (req, res, next) => {
    //const header = req.headers
    //console.log(header)

    const authHeader = req.headers.authorization
    if (!authHeader) {
        throw new UnAuthenticatedError('Authentication Invalid')
    }
    console.log(authHeader)
    next()
}

export default auth

