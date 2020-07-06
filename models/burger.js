
var orm = require("../config/orm");

var burger = {
  all: async () => {
    return await orm.selectAll()
  },
  create: async (burgerName) => {
    return await orm.insertBurger(burgerName)
  },
  update: async (burgerId) => {
    return await orm.updateBurger(burgerId)
  },
};

module.exports = burger;