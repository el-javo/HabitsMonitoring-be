const { Op } = require("sequelize");

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  findBy = async (query) => {
    let mappedQuery = {};
    Object.keys(query).forEach((k) => {
      if (k.endsWith("In")) {
        const value = JSON.parse(query[k]);
        mappedQuery = {
          ...mappedQuery,
          [k.substring(0, k.length - 2)]: { [Op.in]: value },
        };
        return;
      }
      mappedQuery = { ...mappedQuery, [k]: query[k] };
    });
    return await this.model.findAll({ where: mappedQuery });
  };

  create = async (dto) => {
    return await this.model.create(dto);
  };

  delete = async (query) => {
    return await this.model.destroy({ where: query });
  };

  update = async (query, dto) => {
    return await this.model.update(dto, { where: query });
  };
}

module.exports = BaseRepository;
