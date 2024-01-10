class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  findBy = async (query) => {
    return await this.model.findAll({ where: query });
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
