const auth = async (req, res, next) => {
    const header = req.headers
    const authHeader = req.headers.authorization
    console.log(header)
    console.log(authHeader)
    next()
}

export default auth

