import pg from 'pg' ;
const {Client}= pg;

const config={
    user: 'portafoliojaso_bd_user',
    host: 'dpg-csg4tn9u0jms738qs330-a.oregon-postgres.render.com',
    database: 'portafoliojaso_bd',
    password: 'd5DP1sNthSIf5W7kmlSuebiViBjOG3gS',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}
 export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}