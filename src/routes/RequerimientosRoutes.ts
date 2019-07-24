import {Request,Response,Router} from 'express';
import RequerimientosController from '../controllers/RequerimientosController';



const router: Router = Router();

router.get('/Nuevos', RequerimientosController.MostrarRequerimientosNuevos);
router.get('/Insertar',RequerimientosController.InsertarRequerimiento);
router.get('/Ver',RequerimientosController.VerRequerimiento);
router.post('/Guardar',RequerimientosController.GuardarRequerimiento);

router.post('/LogIn',);



export default router;