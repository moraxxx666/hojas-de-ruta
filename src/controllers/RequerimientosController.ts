import { Request, Response } from 'express';
import RequerimientosModel from '../models/RequerimientosModel';

class RequerimientoController {
    constructor() {

    }

    public MostrarRequerimientosNuevos(req: Request, res: Response) {
        if (req.session) {

            if (req.session.user) {
                res.render('NuevosRequerimientos', { titulo: "Requerimientos Nuevos", usuario: req.session.username, area: req.session.area });
            } else {
                req.flash('error', "NECESITA INICIAR SESION");
                res.redirect('/login');
            }
        }

    }
    public VerRequerimiento(req: Request, res: Response) {
        if (req.session) {
            if (req.session.user) {
                res.render('VerRequerimientos', { titulo: "Insertar Requerimiento", usuario: req.session.username, area: req.session.area });
            } else {
                req.flash('error', "NECESITA INICIAR SESION");
                res.redirect('/login');
            }


        }
    }
    public async InsertarRequerimiento(req: Request, res: Response) {
        if (req.session) {
            if (req.session.user) {
                const resultado = await RequerimientosModel.ObtenerAreas();
                const areas = <any>resultado[0];

                res.render('InsertarRequerimiento', { titulo: "Insertar Requerimiento", usuario: req.session.username, area: req.session.area,areas:areas });
            } else {
                req.flash('error', "NECESITA INICIAR SESION");
                res.redirect('/login');
            }

        }
    }
    public async  GuardarRequerimiento(req: Request, res: Response) {
        if (req.session) {
            console.log(req.body);


        }
    }



}
const requerimientoController = new RequerimientoController();
export default requerimientoController;