import { connect } from "../database";
class LoginModel {
    
    async VerificarExisteUsuario(usuario: string, contrasena: string) {
        const con = await connect();
        const res = await con.query(
            `SELECT * FROM  accounts where username='${usuario}' and password = '${contrasena}' `
        );
        await con.end();
        return res;
    }
}

const loginModel = new LoginModel();
export default loginModel;
