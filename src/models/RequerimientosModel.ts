import { connect } from "../database";
class RequerimientoModel {
    
    async VerificarExisteUsuario(usuario: string, contrasena: string) {
        const con = await connect();
        const res = await con.query(
            `SELECT * FROM  accounts where username='${usuario}' and password = '${contrasena}' `
        );
        await con.end();
        return res;
    }
    async ObtenerAreas(){
        const con = await connect();
        const res = await con.query(`SELECT * FROM accounts ORDER BY area`);
        await con.end();
        return res;
    }
}

const loginModel = new RequerimientoModel();
export default loginModel;
