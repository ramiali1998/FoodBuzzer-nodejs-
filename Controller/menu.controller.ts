import { Request, Response } from "express";
import { Menu } from "../src/entity/Menu";
 
export default class MenuController
{
 /**
   *
   * @param req
   * @param res
   * @returns
   */
 static async getAll(req: Request, res: Response): Promise<object> {
  const menu = await Menu.find();

  return res.json(menu);
}

}