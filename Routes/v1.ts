import * as express from "express";
import MenuController from "../Controller/menu.controller"

const route = express.Router();

 


route.get('/menu',MenuController.getAll);

export default route;
