import dontenv from "dotenv";
import mysql from "mysql2/promise";
import {Signale} from "signale";

const signale = new Signale();
dontenv.config();

const config = {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    waitForConnections:true,
    connectionLimit:10
}

const pool = mysql.createPool(config);

export async function executeQuery(sql:string,params:any[]) {
    let conn;
    try {
        conn = await pool.getConnection();
        signale.success('Conexion a la base de datos exitosa');
        const result = await conn.execute(sql,params);
        conn.release();
        return result;
    } catch (error) {
        signale.error(error);
        return null;
    } finally {
        if (conn) {
            conn.release();
        }
    }
}
