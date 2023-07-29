import errors from "../constants/errors.js";

export default (error, req, res, next) => {
  res.status(error.status).send({ status: "error", error: error.message });
};
