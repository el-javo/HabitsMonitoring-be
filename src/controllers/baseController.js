const BaseRepository = require("../repositories/baseRepository");

class BaseController {
  constructor(repository) {
    this.repository = repository;
  }

  async create(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    if (!body || !id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const newEntity = await this.repository.create(body);
    return res.json({ result: newEntity });
  }

  async read(req, res, next) {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const entity = await this.repository.findBy({ id })[0];
    return res.json({ result: entity });
  }

  async list(req, res, next) {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const newEntity = await this.repository.findBy({ id });
    return res.json({ result: newEntity });
  }

  async update(req, res, next) {
    const body = req.body;
    const id = req.params.id;
    if (!body || !id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const newEntity = await this.repository.update({ id }, body);
    return res.json({ result: newEntity });
  }
  async delete(req, res, next) {
    const id = req.params.id;
    if (!body || !id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const newEntity = await this.repository.delete(body);
    return res.json({ result: newEntity });
  }
}

module.exports = BaseController;
