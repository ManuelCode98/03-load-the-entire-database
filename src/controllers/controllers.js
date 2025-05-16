import { load_database } from "../services/load-database.js";


const controllers = {

    load_database: ( req, res )=>{

        try {
            load_database( req, res );

        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    }
}


export {
    controllers,
}