import { Request, Response } from "express";
import { Raw } from "typeorm";
import { print } from "util";
import { Categories } from "../src/entity/Categories";
import { Menu } from "../src/entity/Menu";
import { errRes, okRes } from "../tools/checkResponseState";
export default class MenuController
{
/**
   *
   * @param req
   * @param res
   * @returns
   */

static async getAll(req: Request, res: Response): Promise<object> {

  const categories = await Categories.find({relations:['item']});

  return res.json({status:true ,categories});
}
}