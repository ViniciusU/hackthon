const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const squats = await db.all(`SELECT * FROM squats`);

    await db.close();

    return squats;
  },

  async delete(id) {
    const db = await Database()

    await db.run(`DELETE FROM squats WHERE id = ${id}`)

    await db.close()
  },

  async create(newSquat) {
    const db = await Database()

    await db.run(`INSERT INTO squats(
      name,
      avatar,
      squatId
    ) VALUES (
      "${newSquat.name}",
      ${newSquat.avatar},
      ${newSquat.squatId}
     
    )`)

    await db.close()
  },
};
