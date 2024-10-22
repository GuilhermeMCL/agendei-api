import serviceDoctor from "../services/service.doctor.js";

async function Listar(req, res) {

    const name = req.query.name;
    const trans = await serviceDoctor.Listar(name,);

    res.status(200).json(trans);
}


async function Inserir(req, res) {

    //const name = req.body.name;
    //const specialty = req.body.specialty:
    //const icon = req.body.icon;

    const { name,specialty,icon } = req.body

    const transp = await serviceDoctor.Inserir(name,specialty,icon);

    res.status(201).json(transp);
}


async function Editar(req, res) {
    const id_transp = req.params.id_transp;
    const { name,specialty,icon } = req.body

    const transp = await serviceDoctor.Editar(id_transp, name,specialty,icon);

    res.status(200).json(transp);
}

async function Excluir(req, res) {
    const id_transp = req.params.id_transp;

    const transp = await serviceDoctor.Excluir(id_transp);

    res.status(200).json(transp);
}


export default { Listar,Inserir , Editar, Excluir}