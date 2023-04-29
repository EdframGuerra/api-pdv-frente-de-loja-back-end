class BaseRepository {

    constructor(model) {
        this.model = model
    }

    async findAll(arrAttributes) {
        const dbReturn = await this.model.findAll({ attributes: arrAttributes })
        return dbReturn
    }

    async findOne(where, includes = []) {
        const dbReturn = await this.model.findOne({ where, includes })
        return dbReturn ? dbReturn.toJSON() : null
    }

    async create(data) {
        const dbReturn = await this.model.create(data)
        return dbReturn ? dbReturn.toJSON() : null
    }

    async update(data, where) {
        const dbReturn = await this.model.update(data, { where })
        return dbReturn
    }

    async delete(where) {
        const dbReturn = await this.model.delete(where)
        return dbReturn
    }

    async closeConnection() {
        await this.model.sequelize.close()
    }
}

module.exports = BaseRepository
