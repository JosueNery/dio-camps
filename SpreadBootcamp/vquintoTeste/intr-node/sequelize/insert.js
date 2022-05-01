const models = require('./models')

async function insert() {

    //eventos
    const eventoNode = await models.evento.create({ nome: 'Encontro de Nodejs', data: '2022-06-01' })
    const eventoPostgres = await models.evento.create({ nome: 'Encontro de Postgresql', data: '2022-06-02' })
    const eventoTypescript = await models.evento.create({ nome: 'Encontro de Typescript', data: '2023-04-02' })
    const eventoMongoDB = await models.evento.create({ nome: 'Encontro de MongoDB', data: '2023-04-02' })

    //participante
    const carlos = await models.participante.create({ nome: 'Carlos' })
    const augusto = await models.participante.create({ nome: 'Augusto' })
    const janaina = await models.participante.create({ nome: 'Janaina' })
    const rafael = await models.participante.create({ nome: 'Rafael' })

    //Participantes de evento
    await eventoNode.setParticipantes([carlos, augusto, janaina])
    await eventoPostgres.setParticipantes([janaina, rafael])
    await eventoTypescript.setParticipantes([augusto, rafael, janaina])
    await eventoMongoDB.setParticipantes([janaina, carlos])

    await models.sequelize.close()

    console.log("Dados Inseridos");
}

insert()