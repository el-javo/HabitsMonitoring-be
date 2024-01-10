class BaseController {
  constructor(repository) {
    this.repository = repository;
  }

  create = async (req, res, next) => {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const newEntity = await this.repository.create(body);
    return res.json({ result: newEntity });
  };

  read = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const entities = await this.repository.findBy({ id });
    return res.json({ result: entities[0] ?? {} });
  };

  list = async (req, res, next) => {
    const newEntity = await this.repository.findBy();
    return res.json({ result: newEntity });
  };

  update = async (req, res, next) => {
    const body = req.body;
    const id = req.params.id;
    if (!body || !id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const newEntity = await this.repository.update({ id }, body);
    return res.json({ result: newEntity });
  };
  delete = async (req, res, next) => {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        error: "bad request",
      });
    }
    const deleted = await this.repository.delete({ id });
    return res.json({
      result: deleted === 0 ? `not found id: ${id}` : `deleted id: ${id}`,
    });
  };
}

module.exports = BaseController;
