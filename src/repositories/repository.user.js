import { query } from "../database/sqlite.js"

async function Inserir(name,email,password, CNPJ) {


    let sql = `insert into users (name,email,password,CNPJ) values (?, ?, ?,?)
    returning id_user `


    const user = await query(sql, [name,email,password, CNPJ]);


    return user[0];
}
async function ListarPorEmail(email) {


    let sql = `select * from users where email = ? `


    const user = await query(sql, [email]);

    if(user.lenght == 0)
        return [];
    else
        return user[0];
}


export default { Inserir, ListarPorEmail };
