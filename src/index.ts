import express,{Request,Response} from 'express';
import morgan from 'morgan';
import path from 'path';
import dot from 'dotenv';
import session from 'express-session';
import flash from 'express-flash';
import cookieParser from 'cookie-parser';

//Importando Rutas
import LoginRoutes from './routes/LoginRoutes';
import RequeriminetosRoutes from './routes/RequerimientosRoutes';

//Inicializaciones
const app = express();
dot.config();

//Configuraciones
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
    secret: `${process.env.SECRET}`,
    resave: true,
    saveUninitialized:  true
}));
app.use(flash());
//Rutas
app.use('/login',LoginRoutes);
app.use('/requerimientos',RequeriminetosRoutes);


//Iniciando el Server
app.listen(app.get('port'),()=>{
    console.log(`Servidor Corriendo en ${app.get('port')}`);
    
    
})