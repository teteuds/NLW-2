// Chamando o BD
const Database = require('./db')
const createProffy = require ('./createProffy')

Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
        name: 'Mateus Dias',
        avatar: 'https://avatars1.githubusercontent.com/u/61087098?s=460&u=b569634d53959826b90cc8b847b1ac3fd46871f9&v=4',
        whatsapp: "77 98121-7928",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
    }

    classValue = {
        subject: 1,
        cost: "20",
        // o proffy id vira pelo bd
    }

    classScheduleValues = [
        //class id vira pelo bd apos cadastrar a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 2,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})    

    //Consultar dados inseridos
    //todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor e trazer os dados dele

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN  classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo é das 8h as 18h
    //o horario do time_from (8h) precisa ser antes ou igual ao horario solicitado
    //o time_to precisa ser acima
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1100"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectedClassesSchedules)
})