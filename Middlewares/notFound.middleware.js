const { errRes } = require("../tools/checkResponseState");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
module.exports = (req, res, next) => {
    return errRes(res, "Not Found", 404);
};
x