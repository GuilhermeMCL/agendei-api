import repoUser from "../repositories/repository.user.js"
import bcrypt from "bcrypt";


async function Inserir(name,email,password, CNPJ) {

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repoUser.Inserir(name,email, hashPassword, CNPJ);

        user.token = "0000"

    return user;
}

async function Login(email,password) {

    const user = await repoUser.ListarPorEmail(email);
    if (user.length == 0)
        return [];
    else {
        if (await bcrypt.compare(password, user.password)){
            delete user.password;

            user.token = "000000000";


            return user;
        } else
        return [];
    }

}


export default {Inserir,Login}