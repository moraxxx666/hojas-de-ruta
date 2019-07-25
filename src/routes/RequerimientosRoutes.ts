import {Request,Response,Router} from 'express';
import RequerimientosController from '../controllers/RequerimientosController';



const router: Router = Router();

router.get('/Crear',RequerimientosController.InsertarRequerimiento);
router.get('/Listar',RequerimientosController.ListarRequerimientos);

router.get('/Nuevos', RequerimientosController.MostrarRequerimientosNuevos);

router.get('/Ver',RequerimientosController.VerRequerimiento);
router.post('/Insertar',RequerimientosController.GuardarRequerimiento);


router.post('/LogIn',);



export default router;