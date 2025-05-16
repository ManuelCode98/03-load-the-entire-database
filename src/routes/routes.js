import { Router } from "express";
import { controllers } from "../controllers/controllers.js";

const routes = Router();

routes.get( '/load-database', controllers.load_database );


export {
    routes
}