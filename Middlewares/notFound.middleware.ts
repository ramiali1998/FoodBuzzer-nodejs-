const { errRes } = require("../tools/checkResponseState");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */

export default (req, res, next) => {
    return errRes(res, `Not Found MM `, 404);
  };