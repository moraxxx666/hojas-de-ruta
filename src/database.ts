import {createPool} from 'mysql2/promise';
import dot from 'dotenv';
dot.config();


export async function connect(){
    const connection = await createPool({
        host: `${process.env.HOST_MYSQL}`,
        user: `${process.env.USER_MYSQL}`,
        password: `${process.env.PASSWORD_MYSQL}`,
        database: `${process.env.DATABASE_MYSQL}`,
        connectionLimit: 10
        
    });
    return connection;  
}




