import jwt from "jsonwebtoken";

const secretToken = "agendei123"

function CreateToken(id_user) {
    const token = jwt.sign({ id_user }, secretToken, {
        expiresIn: 99999999
    })

    return token

}

function ValidadeToken(req, res, next) {
    const authToken = req.headers.authorization;

    if (!authToken)
        return res.status(401).json({ error: "token nao informado" });

    const [bearer, token] = authToken.split(" ")

    jwt.verify(token, secretToken, (err, tokenDecoded) => {
        if (err)
            return res.status(401).json({ error: "token nao informado" });

        req.id_user = tokenDecoded.id_user
        next()
    })

}

export default { CreateToken, ValidadeToken }