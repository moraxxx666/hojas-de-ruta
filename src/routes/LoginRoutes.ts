import {Request,Response,Router} from 'express';
import LoginController from '../controllers/LoginControllers';



const router: Router = Router();

router.get('/', LoginController.MostrarFormularioLogIn);


router.post('/LogIn',LoginController.IniciarSesion);

router.post('/LogOut',LoginController.CerrarSesion)

export default router;