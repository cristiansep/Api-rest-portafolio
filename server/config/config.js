
//=====================================
//           Puerto
//=====================================
process.env.PORT = process.env.PORT || 3000;


//=====================================
//           Entorno
//=====================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';




// module.exports.SEED = 'este-es-un-seed-de-prueba';


//=====================================
//           Vencimiento token
//=====================================
process.env.CADUCIDAD_TOKEN = '48h';



//=====================================
//           SEED de autenticacion
//=====================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-prueba';




//=====================================
//           Base de datos
//=====================================
let urlDB;

// if(process.env.NODE_ENV === 'dev'){

//     urlDB ='mongodb://localhost:27017/portafolioDB'
// }else{
    urlDB = 'mongodb+srv://cristiansep:<OeukAiAhVQlSesvl>@cluster0-y4is6.mongodb.net/portafolioDB'
// }

process.env.URLDB = urlDB;









// module.exports.CLIENT_ID = '582561889772-7igcfl6hk3blfb6a72hfi83giv0rl4fb.apps.googleusercontent.com';