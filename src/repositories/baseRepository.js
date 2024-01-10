class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findBy(query) {
    return await this.model.findAll({ where: query });
  }

  async create(dto) {
    return await this.model.create(dto);
  }

  async delete(query) {
    return await this.model.destroy({ where: query });
  }

  async update(query, dto) {
    return await this.model.update({ where: query }, dto);
  }
}

module.exports = BaseRepository;
