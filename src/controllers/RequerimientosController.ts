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
                const resultadoacciones= await RequerimientosModel.ObtenerAcciones();
                const acciones = <any>resultadoacciones[0];

                res.render('InsertarRequerimiento', { titulo: "Insertar Requerimiento", usuario: req.session.username, area: req.session.area,areas:areas,acciones:acciones });
            } else {
                req.flash('error', "NECESITA INICIAR SESION");
                res.redirect('/login');
            }

        }
    }
    public async  GuardarRequerimiento(req: Request, res: Response) {
        if (req.session) {
            if(req.session.user){
                const {nroRegistro,Procedencia,Remitente,CargoRemitente,Adjuntos,nroFojas,TipoDocumento,Referencia} = req.body;
                const resultado  = await RequerimientosModel.GuardarRequerimiento(nroRegistro,Procedencia,Remitente,CargoRemitente,Adjuntos,nroFojas,TipoDocumento,Referencia);
                const insertId = <any>resultado[0];
                if(insertId.insertId != null || insertId.insertId != undefined){
                    req.flash('error', "Hoja de Ruta creada Correctamente");
                }
                else{
                    req.flash('error', "Error al Crear la Hoja de Ruta");
                }
                
                res.redirect('/requerimientos/Insertar');
            }
            else{
                req.flash('error', "NECESITA INICIAR SESION");
                res.redirect('/login');
            }
           
           

        }
    }



}
const requerimientoController = new RequerimientoController();
export default requerimientoController;