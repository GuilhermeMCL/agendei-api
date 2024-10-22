import { query } from "../database/sqlite.js";

async function Listar(name) {

    let filtro = []

    let sql = "select * from transportadora " 
    
    if (name){
        sql = sql + "where name like ?"
        filtro.push('%'+ name + '%');

    }
    
    sql = sql + "order by name"

    const trans = await query(sql, filtro);

    return trans;
}

async function Inserir(name,specialty,icon) {


    let sql = `insert into transportadora (name,specialty,icon) values (?, ?, ?)
    returning id_transp `


    const trans = await query(sql, [name, specialty, icon]);


    return trans[0];
}


async function Editar(id_transp , name,specialty,icon) {


    let sql = `update transportadora set name='', 
                                         specialty='',
                                         icon=''  where id_transp = ?` ;



    const trans = await query(sql, [id_transp, name, specialty, icon]);


    return trans[0];
}


async function Excluir(id_transp) {


    let sql = `delete from transportadora where id_transp = ?  `

     await query(sql, [id_transp]);


    return {id_transp}

}


export default { Listar , Inserir, Editar, Excluir}