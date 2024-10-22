import repoDoctor from "../repositories/repository.doctor.js";

async function Listar(name) {

    const transportadora = await repoDoctor.Listar(name);

    return transportadora;
}

async function Inserir(name,specialty,icon,) {

    const transp = await repoDoctor.Inserir(name,specialty,icon,);

    return transp;
}

async function Editar(id_transp, name,specialty,icon,) {

    const transp = await repoDoctor.Editar(id_transp , name,specialty,icon,);

    return transp;
}

async function Excluir(id_transp) {

    const transp = await repoDoctor.Excluir(id_transp );

    return transp;
}


export default { Listar ,Inserir, Editar , Excluir }