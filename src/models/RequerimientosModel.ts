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
    async ObtenerAreas() {
        const con = await connect();
        const res = await con.query(`SELECT * FROM accounts ORDER BY area`);
        await con.end();
        return res;
    }
    async ObtenerAcciones() {
        const con = await connect();
        const res = await con.query(`SELECT * FROM accion`);
        await con.end();
        return res;
    }
    async GuardarRequerimiento(numreg:string,proce:string,remi:string,cargo_remi:string,adjuntos:string,nrofojas:string,tipodoc:string,referen:string) {
        const con = await connect();
        const res = await con.query(`
        INSERT INTO Requerimientos 
        (numero_registro,procedencia,remitente,cargo_remitente,adjuntos,nro_fojas,
        tipo_de_documento,referencia,revisado_mae) 
        VALUES ('${numreg}','${proce}','${remi}','${cargo_remi}','${adjuntos}','${nrofojas}'
        ,'${tipodoc}','${referen}','NO')`);
        await con.end();
        return res;
    }
    async ListarRequerimientos(){
        const con = await connect();
        const res = await con.query(`SELECT * from Requerimientos order by fecha_ingreso DESC`);
        await con.end();
        return res;
    }
}

const loginModel = new RequerimientoModel();
export default loginModel;
