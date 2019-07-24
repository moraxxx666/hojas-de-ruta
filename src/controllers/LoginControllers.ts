import { Request, Response } from 'express';
import LoginModel from '../models/LoginModel';

class LoginController {
    constructor() {

    }

    public MostrarFormularioLogIn(req: Request, res: Response) {
        if (req.session) {
           
            if (req.session.user) {
                res.redirect('/requerimientos/Nuevos');
            } else {
                res.render('login', { titulo: "LOGIN" });
            }
        }
    }
    public async IniciarSesion(req: Request, res: Response) {
        const respuesta = await LoginModel.VerificarExisteUsuario(req.body.usuario, req.body.contrasena);
        const usuario: any = await <any>respuesta[0];
        if (usuario.length > 0) {
            if (req.session) {
                req.session.user = usuario[0].id;
                req.session.username = usuario[0].username;
                req.session.area = usuario[0].area;
                res.redirect('/requerimientos/Nuevos');
            }
        }
        else {
            req.flash('error', "USUARIO O CONTRASEÑA ERRONEA INTENTE NUEVAMENTE");
            res.redirect('/login');
        }
    }
    public async CerrarSesion(req: Request, res: Response) {
       if(req.session){
        
            req.session.destroy(()=>{
                
                res.redirect('/login');
                
            });
       }
    }

}
const loginController = new LoginController();
export default loginController;