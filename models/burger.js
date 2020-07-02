
var orm = require("../config/orm");

var burger = {
  all: async () => {
    return await orm.selectAll()
  },
  create: async (burgerName) => {
    return await orm.insertburger(burgerName)
  },
  update: async (burgerId) => {
    return await orm.updateburger(burgerId)
  },
};

module.exports = burger;